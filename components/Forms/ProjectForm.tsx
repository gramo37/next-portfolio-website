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
  const methods = useForm<TProjectForm>({
    defaultValues: {
      project: user?.project || [],
    },
  });
  const { handleSubmit } = methods;
  const emptyData = {
    project_name: "",
    description: [""],
    techStack: [""],
    background_img_url: "",
    project_link: "",
  };
  const { mutate } = useSubmitData("project");

  const onSubmit: SubmitHandler<TProjectForm> = (data) => {
    console.log(data?.project);
    // mutate(data?.project || []);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ArrayInput name="project" emptyData={emptyData} />
        <SubmitButton />
      </form>
    </FormProvider>
  );
}
