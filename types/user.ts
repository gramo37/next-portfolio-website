export interface TUser {
  id?: number;
  email: string;
  name: string;
  description: string[];
  profession: string;
  twitter_link: string;
  linkedin_link: string;
  github_link: string;
  phone: string;
}

export interface TWorkExperience {
  id?: number;
  company_name: string;
  profession: string;
  duration: string;
  description: string[];
}

export interface TEducation {
  id?: number;
  degree_name: string;
  university_name: string;
  duration: string;
  description: string[];
}

export interface TSkill {
  id?: number;
  skill_name: string;
  proficiency: number;
  maximum_proficiency: number;
}

export interface TProject {
  id?: number;
  project_name: string;
  description: string[];
  techStack: string[];
  background_img_url: string;
  project_link: string;
}
