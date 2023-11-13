export const localName: any = {
  education: "Education",
  skills: "Skills",
  project: "Projects",
  workExperience: "Work Experience",
  name: "Name",
  email: "Email",
  profession: "Profession",
  twitter_link: "Twitter Link",
  linkedin_link: "LinkedIn Link",
  github_link: "Github Link",
  phone: "Phone",
  degree_name: "Degree Name",
  university_name: "University Name",
  duration: "Duration",
  skill_name: "Skill Name",
  proficiency: "Proficiency",
  maximum_proficiency: "Maximum Proficiency",
  project_name: "Project Name",
  background_img_url: "Background Image",
  project_link: "Project Link",
  company_name: "Company Name",
  "description.description": "Description",
  "education.description": "Education Description",
  "project.description": "Project Description",
  "project.techStack": "Tech Stack",
  "workExperience.description": "Work Experience Description",
};

export const localNameForArrays = (label: any) => {
  const str = label.split(".");
  const start = str[0];
  const end = str[str.length - 1];
  return localName[`${start}.${end}`];
};
