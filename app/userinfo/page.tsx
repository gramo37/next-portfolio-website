"use client";

import EducationForm from "@/components/Forms/EducationForm";
import ProjectForm from "@/components/Forms/ProjectForm";
import SkillForm from "@/components/Forms/SkillForm";
import UserForm from "@/components/Forms/UserForm";
import WorkExperienceForm from "@/components/Forms/WorkExperienceForm";
import useGetMenuStore from "@/context/StoreCurrentMenu";
import useGetUserInfo from "@/hooks/useGetUserInfo";
import React from "react";

export default function Update() {
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
    </>
  );
}
