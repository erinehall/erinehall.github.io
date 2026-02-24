
export interface PortfolioItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  links: Array<{
    label: string;
    url: string;
  }>;
}

export interface Role {
  heading: string;
  icon: string;
  bullets: string[];
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  title: string;
  location: string;
  date: string;
  roles: Role[];
}

export interface EducationItem {
  school: string;
  degree: string;
  date: string;
  thesis?: {
    title: string;
    url: string;
  };
  details: string[];
}

export interface Publication {
  title: string;
  date: string;
  doi: string;
  link: string;
  conference?: string;
}

export interface Certification {
  name: string;
  organization: string;
  date: string;
}

export interface Membership {
  name: string;
  date: string;
}

export interface Presentation {
  conference: string;
  role: string;
  location: string;
  date: string;
}

export interface ResumeData {
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
  aboutPageSkills: string[];
  publications: Publication[];
  certifications: Certification[];
  clearances: string[];
  memberships: Membership[];
  presentations: Presentation[];
}
