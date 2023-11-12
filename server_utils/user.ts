import { prisma } from "@/db";
import {
  TEducation,
  TProject,
  TSkill,
  TUser,
  TWorkExperience,
} from "@/types/user";

type TUserInfo = TUser & {
  skills: TSkill[];
  workExperience: TWorkExperience[];
  education: TEducation[];
  project: TProject[];
};

export async function getUserInfo(): Promise<TUserInfo> {
  const user = await prisma.user.findUnique({
    where: { id: 1 },
    select: {
      name: true,
      email: true,
      description: true,
      profession: true,
      twitter_link: true,
      linkedin_link: true,
      github_link: true,
      phone: true,
      education: {
        select: {
          id: true,
          degree_name: true,
          university_name: true,
          duration: true,
          description: true,
        },
      },
      skills: {
        select: {
          id: true,
          skill_name: true,
          proficiency: true,
          maximum_proficiency: true,
        },
      },
      project: {
        select: {
          id: true,
          project_name: true,
          description: true,
          techStack: true,
          background_img_url: true,
          project_link: true,
        },
      },
      workExperience: {
        select: {
          id: true,
          company_name: true,
          profession: true,
          duration: true,
          description: true,
        },
      },
    },
  });
  if (!user) throw new Error("User not found!");
  return user;
}

export async function updateUserInfo(user: TUser) {
  const updatedUser = await prisma.user.update({
    where: { id: 1 },
    data: user,
  });
  if (!updatedUser) throw new Error("User not updated! Try again..");
  return updatedUser;
}

export async function updateProjectInfo(project: TProject) {
  const updatedProject = await prisma.project.update({
    where: { id: 1 },
    data: project,
  });
  if (!updatedProject) throw new Error("Project not updated! Try again..");
  return updatedProject;
}

export async function updateSkillInfo(skill: TSkill) {
  const updatedSkill = await prisma.skill.update({
    where: { id: 1 },
    data: skill,
  });
  if (!updatedSkill) throw new Error("Skill not updated! Try again..");
  return updatedSkill;
}

export async function updateEducationInfo(education: TEducation[]) {
  // Delete unnecessary fields
  let allFields = await prisma.education.findMany({
    where: { userId: 1 },
    select: { id: true },
  });
  let requiredIDs = new Set(
    education.map((item) => item.id).filter((item) => Boolean(item))
  );
  let currIDs = allFields.map((item) => item.id);
  let toBeDeletedIDs = currIDs.filter((item) => !requiredIDs.has(item));
  for (let i = 0; i < toBeDeletedIDs.length; i++) {
    await prisma.education.delete({
      where: {
        id: toBeDeletedIDs[i],
      },
    });
  }

  let updatedEducation: TEducation[] = [];
  const ps: Promise<TEducation>[] = [];
  education.forEach((item) => {
    let newData: Promise<TEducation>;
    // Update if id is given
    if (item?.id) {
      newData = prisma.education.update({
        where: { id: item?.id },
        data: item,
      });
    // Create a new entry if id is not given
    } else {
      newData = prisma.education.create({
        data: { ...item, userId: 1 },
      });
    }
    ps.push(newData);
  });
  updatedEducation = await Promise.all(ps);
  if (!updatedEducation) throw new Error("Education not updated! Try again..");
  return updatedEducation;
}

export async function updateWorkExperienceInfo(
  workExperience: TWorkExperience
) {
  const updatedWorkExperience = await prisma.workExperience.update({
    where: { id: 1 },
    data: workExperience,
  });
  if (!updatedWorkExperience)
    throw new Error("WorkExperience not updated! Try again..");
  return updatedWorkExperience;
}
