import { Project, Certificate, TechItem, SocialLink } from './types';
import posterImg from './assets/images/regenerated_image_1777745607881.png';
import brandingImg from './assets/images/regenerated_image_1777745616126.png';

export const PROJECTS: Project[] = [
  {
    id: 'poster-design',
    title: 'Poster Design',
    description: 'Koleksi desain poster kreatif untuk berbagai kebutuhan campaign, event, dan promosi komersial.',
    technologies: ['Corel Draw', 'Photoshop'],
    features: [
      'Visual storytelling yang kuat',
      'Komposisi tipografi modern',
      'Color grading yang profesional'
    ],
    image: posterImg,
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'branding-identity',
    title: 'Branding Identity',
    description: 'Pengembangan identitas merek yang unik meliputi logo, kartu nama, dan brand guidelines.',
    technologies: ['Illustrator', 'Figma'],
    features: [
      'Konsep logo filosofis',
      'Konsistensi elemen visual',
      'Desain yang timeless'
    ],
    image: brandingImg,
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'social-media-content',
    title: 'Social Media Content',
    description: 'Desain konten media sosial yang menarik dan informatif untuk meningkatkan engagement audiens.',
    technologies: ['Photoshop', 'CapCut'],
    features: [
      'Optimasi format feed & story',
      'Micro-blogging visuals',
      'Dynamic motion graphics'
    ],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800&h=600',
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert1',
    title: 'Pelatihan Videography BLKK',
    issuer: "PP Salafiyah Syafi'iyah Sukorejo",
    date: '2025',
    image: `${import.meta.env.BASE_URL}sertifikat pelatihan videography.jpg`
  },
  {
    id: 'cert2',
    title: 'Juara 3 Desain Poster',
    issuer: 'Insitut Agama Islam Pemalang',
    date: '2025',
    image: `${import.meta.env.BASE_URL}sertifikat insip desain juara 3.jpg`
  },
  {
    id: 'cert3',
    title: 'Juara 2 Video Reels Instagram',
    issuer: 'PWNU Jawa Timur',
    date: '2026',
    image: `${import.meta.env.BASE_URL}juara 2 video reels Instagram PWNU Jatim.jpg`
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'Corel Draw', icon: 'PenTool' },
  { name: 'Adobe Photoshop', icon: 'Image' },
  { name: 'Adobe Illustrator', icon: 'Palette' },
  { name: 'Figma', icon: 'Figma' },
  { name: 'After Effects', icon: 'Sparkles' },
  { name: 'Premiere Pro', icon: 'Film' },
  { name: 'Blender', icon: 'Box' }, // Representing 3D
  { name: 'InDesign', icon: 'Type' },
  { name: 'Lightroom', icon: 'Camera' },
  { name: 'CapCut', icon: 'Scissors' }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', url: 'https://www.instagram.com/dkydesain?igsh=N2RuYWdobWpvOXg3&utm_source=qr' },
  { name: 'WhatsApp', url: 'https://wa.me/6285606572757' },
  { name: 'Linkedin', url: 'https://id.linkedin.com/in/dickymulki12' },
  { name: 'Github', url: 'https://github.com/mulkidiky' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@mulkidicky' }
];
