import SubmitButton from "@/components/SubmitButton";
import useSubmitData from "@/hooks/useSubmitData";
import { TProject } from "@/types/user";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import ArrayInput from "../ArrayInput";

type TProjectForm = {
  project: TProject[];
};

export default function ProjectForm(props: any) {
  const { user } = props;
  const methods = useForm<TProjectForm>();
  const { handleSubmit } = methods;

  const { mutate } = useSubmitData("project");

  const onSubmit: SubmitHandler<TProjectForm> = (data) => {
    console.log(data?.project);
    // mutate(data?.project || []);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ArrayInput name="project" data={user?.project}/>
        <SubmitButton label="Submit Project Deatails"/>
      </form>
    </FormProvider>
  );
}
