export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

<<<<<<< HEAD
export interface SocialLink {
  name: string;
  url: string;
}

=======
>>>>>>> 9df8b8e (fix: configure Vite and GitHub Pages deployment)
export interface Comment {
  id: string;
  name: string;
  message: string;
  profilePhotoUrl?: string;
  createdAt: any;
}
<<<<<<< HEAD
=======

export interface SocialLink {
  name: string;
  url: string;
}
>>>>>>> 9df8b8e (fix: configure Vite and GitHub Pages deployment)
