import useSubmitData from "@/hooks/useSubmitData";
import { TProject } from "@/types/user";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import ArrayInput from "../DynamicInputs/ArrayInput";
import { Button } from "../ui/button";

type TProjectForm = {
  project: TProject[];
};

export default function ProjectForm(props: any) {
  const { user } = props;
  const methods = useForm<TProjectForm>();
  const { handleSubmit } = methods;

  const { mutate } = useSubmitData("project");

  const onSubmit: SubmitHandler<TProjectForm> = (data) => {
    mutate(data?.project || []);
  };

  return (
    <FormProvider {...methods}>
      <form className="flex items-center flex-col" onSubmit={handleSubmit(onSubmit)}>
        <ArrayInput name="project" data={user?.project} />
        <Button className="m-2">Submit Project Details</Button>
      </form>
    </FormProvider>
  );
}
