import { motion } from 'motion/react';
import { Download, ExternalLink, Code2, Award, Globe, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const STATS = [
  { label: 'TOTAL PROJECTS', value: 11, icon: Code2, suffix: '+' },
  { label: 'CERTIFICATES', value: 3, icon: Award, suffix: '' },
  { label: 'YEARS OF EXP.', value: 3, icon: Globe, suffix: '+' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">About Me</h2>
          <p className="text-brand-accent font-mono tracking-widest text-sm">
            TRANSFORMING IDEAS INTO DIGITAL EXPERIENCES
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              Hello, I'm <br />
              <span className="text-gradient">Abdul Malikal Mulki</span>
            </h3>
            <p className="text-white/60 leading-relaxed text-lg">
              Seorang siswa lulusan SMKS Ibrahimy 1 Sukorejo jurusan Desain Komunikasi Visual yang tertarik dalam dunia Graphic Design. Saya berfokus pada menciptakan visual yang menarik dan selalu berusaha memberikan solusi kreatif terbaik dalam setiap proyek desain.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="https://drive.google.com/file/d/17A9-5AsU37zohnvcq_doFQ-PUfU8FTdi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-brand-primary rounded-xl font-bold flex items-center space-x-2 inline-flex"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.find(s => s.name === 'Instagram')?.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 glass rounded-xl font-bold flex items-center space-x-2 inline-flex"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Projects</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src={`${import.meta.env.BASE_URL}foto-diky.jpg.png`}
                alt="Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#030014]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-brand-primary/50 transition-colors"
            >
              <stat.icon className="w-8 h-8 text-brand-accent mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-display font-bold mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-white/40 text-xs font-mono tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
