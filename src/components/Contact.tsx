import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MessageSquare, User, Upload, Share2, Mail } from 'lucide-react';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Comment } from '../types';
import { SOCIAL_LINKS } from '../constants';
import { formatDistanceToNow } from 'date-fns';
import { useDropzone, Accept } from 'react-dropzone';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'comments'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Comment[];
      setComments(docs);
    });
    return () => unsubscribe();
  }, []);

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setProfilePhoto(reader.result as string);
    reader.readAsDataURL(file);
  };

  const accept: Accept = {
    'image/*': []
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles: 1
  });

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName || !commentText) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'comments'), {
        name: commentName,
        message: commentText,
        profilePhotoUrl: profilePhoto || '',
        createdAt: serverTimestamp()
      });
      setCommentName('');
      setCommentText('');
      setProfilePhoto(null);
    } catch (error) {
      console.error("Error adding comment: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [contactSuccess, setContactSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => setContactSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Me</h2>
          <p className="text-white/50">Got a question? Send me a message, and I'll get back to you soon.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form & Info */}
          <div className="space-y-12">
            <div className="glass p-8 rounded-3xl space-y-6">
              <h3 className="text-2xl font-bold flex items-center space-x-2">
                <span>Get in Touch</span>
                <Share2 className="w-5 h-5 text-brand-accent" />
              </h3>
              <p className="text-white/60 text-sm">Have something to discuss? Send me a message and let's talk.</p>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
                 <div className="relative">
                   <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                   <input 
                     required
                     type="text" 
                     placeholder="Your Name" 
                     className="w-full pl-12 pr-4 py-4 glass rounded-xl outline-none focus:border-brand-primary transition-colors text-sm"
                   />
                 </div>
                 <div className="relative">
                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                   <input 
                     required
                     type="email" 
                     placeholder="Your Email" 
                     className="w-full pl-12 pr-4 py-4 glass rounded-xl outline-none focus:border-brand-primary transition-colors text-sm"
                   />
                 </div>
                 <textarea 
                  required
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-4 py-4 glass rounded-xl outline-none focus:border-brand-primary transition-colors text-sm resize-none"
                 />
                 <motion.button
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="w-full py-4 bg-brand-primary rounded-xl font-bold flex items-center justify-center space-x-2 shadow-[0_10px_20px_rgba(109,40,217,0.3)] disabled:opacity-50"
                 >
                   <Send className="w-5 h-5" />
                   <span>{contactSuccess ? 'Sent Successfully!' : 'Send Message'}</span>
                 </motion.button>
              </form>
            </div>

            <div className="glass p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {SOCIAL_LINKS.map(social => (
                   <a 
                     key={social.name} 
                     href={social.name === 'Instagram' ? 'https://www.instagram.com/mulkidiky/' : social.url} 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center justify-between p-4 glass rounded-xl hover:bg-white/5 transition-colors group"
                   >
                      <span className="font-bold">{social.name}</span>
                      <Send className="w-4 h-4 text-white/30 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                   </a>
                ))}
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold flex items-center space-x-2">
                  <MessageSquare className="w-6 h-6 text-brand-secondary" />
                  <span>Comments</span>
                </h3>
                <span className="glass px-3 py-1 rounded-full text-xs font-mono">{comments.length}</span>
              </div>

              <form onSubmit={handleSubmitComment} className="space-y-4 mb-12">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40">Name *</label>
                  <input 
                    required
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 glass rounded-xl outline-none focus:border-brand-secondary transition-colors text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40">Message *</label>
                  <textarea 
                    required
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write your message here..."
                    rows={3}
                    className="w-full px-4 py-3 glass rounded-xl outline-none focus:border-brand-secondary transition-colors text-sm resize-none"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40">Profile Photo (Optional)</label>
                  <div {...getRootProps()} className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${isDragActive ? 'border-brand-accent bg-brand-accent/5' : 'border-white/10 hover:border-white/20'}`}>
                    <input {...getInputProps()} />
                    {profilePhoto ? (
                      <div className="flex items-center justify-center space-x-4">
                        <img src={profilePhoto} className="w-12 h-12 rounded-full object-cover" />
                        <span className="text-sm text-brand-accent">Photo selected!</span>
                        <button type="button" onClick={(e) => { e.stopPropagation(); setProfilePhoto(null); }} className="text-xs text-red-400">Remove</button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center space-y-2 text-white/40">
                        <Upload className="w-6 h-6" />
                        <p className="text-sm">Choose Profile Photo</p>
                        <p className="text-[10px]">Max file size: 5MB</p>
                      </div>
                    )}
                  </div>
                </div>

                <motion.button
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-brand-secondary rounded-xl font-bold flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitting ? 'Posting...' : 'Post Comment'}
                </motion.button>
              </form>

              {/* Comments List */}
              <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                <AnimatePresence initial={false}>
                  {comments.map((comment) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="glass p-6 rounded-2xl flex space-x-4"
                    >
                      <img 
                        src={comment.profilePhotoUrl || "https://picsum.photos/seed/user/100/100"} 
                        alt="User" 
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-brand-accent truncate">{comment.name}</h4>
                          <span className="text-[10px] text-white/30 whitespace-nowrap">
                            {comment.createdAt?.toDate ? formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true }) : 'Just now'}
                          </span>
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed break-words">{comment.message}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
