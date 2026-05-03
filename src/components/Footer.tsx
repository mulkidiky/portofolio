import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#030014]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-xl font-display font-bold text-gradient">
          DKY
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-white/40">
          <span>Created with</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          <span>by</span>
          <span className="text-white">Abdul Malikal Mulki</span>
        </div>

        <div className="text-xs text-white/20 font-mono tracking-widest">
           © {new Date().getFullYear()} ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
