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

export async function updateProjectInfo(project: TProject[]) {
  try {
    // Delete unnecessary fields
    let allFields = await prisma.project.findMany({
      where: { userId: 1 },
      select: { id: true },
    });
    let requiredIDs = new Set(
      project.map((item) => item.id).filter((item) => Boolean(item))
    );
    let currIDs = allFields.map((item) => item.id);
    let toBeDeletedIDs = currIDs.filter((item) => !requiredIDs.has(item));
    await prisma.project.deleteMany({
      where: {
        id: {
          in: toBeDeletedIDs,
        },
      },
    });

    let toBeCreated: any = [];
    let toBeUpdated: any = [];
    project.forEach((item) => {
      if (item?.id) toBeUpdated.push(item);
      else toBeCreated.push({ ...item, userId: 1 });
    });

    await prisma.project.createMany({
      data: toBeCreated,
    });

    for (let i = 0; i < toBeUpdated.length; i++) {
      await prisma.project.update({
        where: { id: toBeUpdated[i].id },
        data: toBeUpdated[i],
      });
    }
    return "Successfully updated Project Details";
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export async function updateSkillInfo(skills: TSkill[]) {
  try {
    // Delete unnecessary fields
    let allFields = await prisma.skill.findMany({
      where: { userId: 1 },
      select: { id: true },
    });
    let requiredIDs = new Set(
      skills.map((item) => item.id).filter((item) => Boolean(item))
    );
    let currIDs = allFields.map((item) => item.id);
    let toBeDeletedIDs = currIDs.filter((item) => !requiredIDs.has(item));
    await prisma.skill.deleteMany({
      where: {
        id: {
          in: toBeDeletedIDs,
        },
      },
    });

    let toBeCreated: any = [];
    let toBeUpdated: any = [];
    skills.forEach((item) => {
      item["proficiency"] = Number(item["proficiency"])
      item["maximum_proficiency"] = Number(item["maximum_proficiency"])
      if (item?.id) toBeUpdated.push(item);
      else toBeCreated.push({ ...item, userId: 1 });
    });

    await prisma.skill.createMany({
      data: toBeCreated,
    });

    for (let i = 0; i < toBeUpdated.length; i++) {
      await prisma.skill.update({
        where: { id: toBeUpdated[i].id },
        data: toBeUpdated[i],
      });
    }
    return "Successfully updated Skill Details";
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export async function updateEducationInfo(education: TEducation[]) {
  try {
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
    await prisma.education.deleteMany({
      where: {
        id: {
          in: toBeDeletedIDs,
        },
      },
    });

    let toBeCreated: any = [];
    let toBeUpdated: any = [];
    education.forEach((item) => {
      if (item?.id) toBeUpdated.push(item);
      else toBeCreated.push({ ...item, userId: 1 });
    });

    await prisma.education.createMany({
      data: toBeCreated,
    });

    for (let i = 0; i < toBeUpdated.length; i++) {
      await prisma.education.update({
        where: { id: toBeUpdated[i].id },
        data: toBeUpdated[i],
      });
    }
    return "Successfully updated Education Details";
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export async function updateWorkExperienceInfo(workExperience: TWorkExperience[]) {
  try {
    // Delete unnecessary fields
    let allFields = await prisma.workExperience.findMany({
      where: { userId: 1 },
      select: { id: true },
    });
    let requiredIDs = new Set(
      workExperience.map((item) => item.id).filter((item) => Boolean(item))
    );
    let currIDs = allFields.map((item) => item.id);
    let toBeDeletedIDs = currIDs.filter((item) => !requiredIDs.has(item));
    await prisma.workExperience.deleteMany({
      where: {
        id: {
          in: toBeDeletedIDs,
        },
      },
    });

    let toBeCreated: any = [];
    let toBeUpdated: any = [];
    workExperience.forEach((item) => {
      if (item?.id) toBeUpdated.push(item);
      else toBeCreated.push({ ...item, userId: 1 });
    });

    await prisma.workExperience.createMany({
      data: toBeCreated,
    });

    for (let i = 0; i < toBeUpdated.length; i++) {
      await prisma.workExperience.update({
        where: { id: toBeUpdated[i].id },
        data: toBeUpdated[i],
      });
    }
    return "Successfully updated Work Experience Details";
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

// Create a function to update all fields at once
export async function updateAllUserInfo(data: any) {}
