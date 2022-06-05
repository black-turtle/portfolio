export interface GeneralDataType {
  portFolioTitle: string;
  name: string;
  role: string;
  personalEmail?: string;
  linkedInUrl?: string;
  cvFileUrl?: string;
}

export interface SkillType {
  category: string;
  skills: {
    name: string;
    level: string;
  }[];
}

export interface ProjectType {
  header: string;
  previewUrl?: string;
  demoUrl?: string;
  sourceUrl?: string;
  description: string;
  tags: string[];
  features: string[];
}

export interface JobExperienceType {
  experience: string;

  jobs: JobType[];
}

export interface JobType {
  position: string;
  details: string[];
  tasks: string[];
}
