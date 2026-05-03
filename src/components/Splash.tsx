import { motion, AnimatePresence } from 'motion/react';
import { Palette, Brush, Layers } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Splash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030014]"
        >
          <div className="relative flex items-center justify-center space-x-8 mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <Palette className="w-12 h-12 text-brand-secondary" />
            </motion.div>
            <motion.div
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            >
              <Brush className="w-12 h-12 text-brand-primary" />
            </motion.div>
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.4, type: 'spring' }}
            >
              <Layers className="w-12 h-12 text-brand-accent" />
            </motion.div>
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-6xl font-display font-bold text-center"
          >
            Welcome To My <br />
            <span className="text-gradient">Portfolio Website</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-6 text-white/50 font-mono tracking-widest text-sm"
          >
            © www.dky.my.id
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
