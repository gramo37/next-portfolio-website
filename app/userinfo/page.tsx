"use client";

import EducationForm from "@/components/Forms/EducationForm";
import UserForm from "@/components/Forms/UserForm";
import useGetUserInfo from "@/hooks/useGetUserInfo";
import React from "react";

export default function Update() {
  const { user, isError, isLoading } = useGetUserInfo();

  if (isError) return <h1>Something went wrong!!</h1>;
  if (isLoading) return <h1>Loading....</h1>;

  return (
    <>
      <UserForm user={user} />
      <EducationForm user={user} />
    </>
  );
}
