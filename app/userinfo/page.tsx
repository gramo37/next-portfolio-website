"use client";

import EducationForm from "@/components/StaticForms/EducationForm";
import ProjectForm from "@/components/StaticForms/ProjectForm";
import SkillForm from "@/components/StaticForms/SkillForm";
import UserForm from "@/components/StaticForms/UserForm";
import WorkExperienceForm from "@/components/StaticForms/WorkExperienceForm";
import useGetMenuStore from "@/context/StoreCurrentMenu";
import useGetUserInfo from "@/hooks/useGetUserInfo";
import React from "react";
import { Toaster } from "@/components/ui/toaster";

export default function Update() {
  // We can directly use await getUserInfo(); without making an API call from frontend
  // Here I have used useQuery just for my understanding
  const { user, isError, isLoading } = useGetUserInfo();
  const { menu } = useGetMenuStore();

  if (isError) return <h1>Something went wrong!!</h1>;
  if (isLoading) return <h1>Loading....</h1>;

  return (
    <>
      {menu === "userinfo" && <UserForm user={user} />}
      {menu === "education" && <EducationForm user={user} />}
      {menu === "skills" && <SkillForm user={user} />}
      {menu === "projects" && <ProjectForm user={user} />}
      {menu === "workexperience" && <WorkExperienceForm user={user} />}
      <Toaster />
    </>
  );
}
