"use client";

import MultiInput from "@/components/MultiInput";
import SingleInput from "@/components/SingleInput";
import SubmitButton from "@/components/SubmitButton";
import useGetUserInfo from "@/hooks/useGetUserInfo";
import useSubmitData from "@/hooks/useSubmitData";
import { TUser, TEducation } from "@/types/user";
import React, { useEffect } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

export default function Update() {
  const { user, isError, isLoading } = useGetUserInfo();

  const methods = useForm<TUser>();
  const { handleSubmit, setValue } = methods;
  const { mutate } = useSubmitData();

  useEffect(() => {
    setValue("name", user?.name || "");
    setValue("email", user?.email || "");
    setValue("profession", user?.profession || "");
    setValue("twitter_link", user?.twitter_link || "");
    setValue("linkedin_link", user?.linkedin_link || "");
    setValue("github_link", user?.github_link || "");
    setValue("description", user?.description || [""]);
  }, [setValue, user]);

  if (isError) return <h1>Something went wrong!!</h1>;
  if (isLoading) return <h1>Loading....</h1>;

  const onSubmit: SubmitHandler<TUser> = (data) => {
    mutate(data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SingleInput name="name" label="Name" />
          <SingleInput name="email" label="Email" />
          <MultiInput name="description" />
          <SingleInput
            name="profession"
            label="Profession"
          />
          <SingleInput
            name="twitter_link"
            label="Twitter Link"
          />
          <SingleInput
            name="linkedin_link"
            label="LinkedIn Link"
          />
          <SingleInput
            name="github_link"
            label="GitHub Link"
          />
          <SubmitButton />
        </form>
      </FormProvider>
    </>
  );
}
