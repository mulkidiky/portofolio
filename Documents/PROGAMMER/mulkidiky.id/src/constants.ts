import { Project, Certificate, TechItem, SocialLink } from './types';

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
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800&h=600',
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
    image: 'regenerated_image_1777745616126.png',
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
    title: 'Visual Identity Design Specialization',
    issuer: 'Coursera / Adobe',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'cert2',
    title: 'Logo Design Masterclass',
    issuer: 'Udemy',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1626785774625-ddc7c8241520?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'cert3',
    title: 'Professional Graphic Design Certification',
    issuer: 'Adobe Certified Professional',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800&h=600'
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
  { name: 'Youtube', url: 'https://youtube.com/@mulkidiky' },
  { name: 'Linkedin', url: 'https://linkedin.com/in/mulkidiky' },
  { name: 'Github', url: 'https://github.com/mulkidiky' },
  { name: 'TikTok', url: 'https://tiktok.com/@mulkidiky' }
];