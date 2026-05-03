import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, CERTIFICATES, TECH_STACK } from '../constants';
import { ExternalLink, Github, Eye, ChevronRight, HelpCircle } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

type Tab = 'projects' | 'certificates' | 'tech';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>('projects');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="portfolio" className="py-24 bg-[#030014]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Portfolio Showcase</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical expertise. 
            Each section represents a milestone in my continuous learning path.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1 glass rounded-2xl">
            {(['projects', 'certificates', 'tech'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeTab === tab ? 'bg-brand-primary text-white shadow-lg' : 'text-white/50 hover:text-white'
                }`}
              >
                {tab === 'projects' && 'Projects'}
                {tab === 'certificates' && 'Certificates'}
                {tab === 'tech' && 'Tool Set'}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {PROJECTS.map((project) => (
                  <motion.div
                    key={project.id}
                    layoutId={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="glass rounded-3xl overflow-hidden cursor-pointer group"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Eye className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                      <p className="text-white/60 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'certificates' && (
              <motion.div
                key="certs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {CERTIFICATES.map((cert) => (
                  <div key={cert.id} className="glass rounded-3xl overflow-hidden group">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-6">
                      <h3 className="font-bold">{cert.title}</h3>
                      <p className="text-white/40 text-sm">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'tech' && (
              <motion.div
                key="tech"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {TECH_STACK.map((tech) => {
                  const IconComponent = (LucideIcons as any)[tech.icon] || HelpCircle;
                  return (
                    <div key={tech.name} className="glass p-6 rounded-2xl flex flex-col items-center justify-center space-y-3 group hover:border-brand-accent/50 transition-colors">
                      <div className="text-3xl text-white/40 group-hover:text-brand-accent transition-all group-hover:scale-110">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className="font-bold text-sm">{tech.name}</span>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Project Detail Modal Placeholder Logic */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                layoutId={selectedProject.id}
                onClick={(e) => e.stopPropagation()}
                className="glass w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 md:p-12 relative"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full"
                >
                  ✕
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full rounded-2xl shadow-2xl mb-8"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex gap-4">
                      <button className="flex-1 py-3 bg-brand-primary rounded-xl font-bold flex items-center justify-center space-x-2">
                        <Eye className="w-5 h-5" />
                        <span>Live Demo</span>
                      </button>
                      <button className="flex-1 py-3 glass rounded-xl font-bold flex items-center justify-center space-x-2">
                        <Github className="w-5 h-5" />
                        <span>Github</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                      <p className="text-white/70 leading-relaxed">{selectedProject.description}</p>
                    </div>

                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((t: string) => (
                          <span key={t} className="px-3 py-1 glass rounded-md text-sm">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((f: string) => (
                          <li key={f} className="flex items-center space-x-2 text-white/70 text-sm">
                            <ChevronRight className="w-4 h-4 text-brand-secondary" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
