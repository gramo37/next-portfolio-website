"use client";

import useGetUserInfo from "@/hooks/useGetUserInfo";
import useSubmitData from "@/hooks/useSubmitData";
import { TUser } from "@/types/user";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Update() {
  const { register, handleSubmit } = useForm<TUser>();
  const { mutate } = useSubmitData();
  const { user, isError, isLoading } = useGetUserInfo();
  
  if (isError) return <h1>Something went wrong!!</h1>;
  if (isLoading) return <h1>Loading....</h1>;

  const onSubmit: SubmitHandler<TUser> = (data) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register("name")} defaultValue={user?.name}/>
      </div>
      <div>
        <label>Email</label>
        <input {...register("email")} defaultValue={user?.email}/>
      </div>
      <div>
        <label>Description</label>
        <textarea {...register("description")} defaultValue={user?.description}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
