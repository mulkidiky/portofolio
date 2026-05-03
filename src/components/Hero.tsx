import { motion } from 'motion/react';
import { Rocket, Send, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[128px] animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[128px] animate-blob" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
           initial={{ x: -100, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass text-xs font-mono mb-6 text-brand-accent">
            <Rocket className="w-3 h-3" />
            <span>Ready to innovate</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight mb-4">
            Graphic <br />
            <span className="text-gradient">Designer</span>
          </h1>
          
          <p className="text-xl text-white/60 mb-8 max-w-lg font-display">
            Menciptakan Visual Yang Inovatif, Kreatif, dan Menarik Untuk Solusi Branding Digital.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <span className="px-3 py-1 glass rounded-md text-sm">Cinematic</span>
            <span className="px-3 py-1 glass rounded-md text-sm">Branding</span>
            <span className="px-3 py-1 glass rounded-md text-sm">Visual Arts</span>
            <span className="px-3 py-1 glass rounded-md text-sm">Concept Design</span>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-brand-primary rounded-xl font-bold flex items-center space-x-2"
            >
              <Rocket className="w-5 h-5" />
              <span>View Projects</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 glass rounded-xl font-bold flex items-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Contact Me</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="relative flex justify-center"
        >
          <img 
            src={`${import.meta.env.BASE_URL}foto-diky.jpg.png`} 
            alt="Diky Profile" 
            className="w-full max-w-md drop-shadow-[0_0_50px_rgba(109,40,217,0.3)] rounded-3xl object-cover aspect-[4/5]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
