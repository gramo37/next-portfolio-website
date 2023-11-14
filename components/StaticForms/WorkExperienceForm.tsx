import useSubmitData from "@/hooks/useSubmitData";
import { TWorkExperience } from "@/types/user";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import ArrayInput from "../DynamicInputs/ArrayInput";
import { Button } from "../ui/button";

type TSkillForm = {
  workExperience: TWorkExperience[];
};

export default function WorkExperienceForm(props: any) {
  const { user } = props;
  const methods = useForm<TSkillForm>();
  const { handleSubmit } = methods;

  const { mutate } = useSubmitData("workExperience");

  const onSubmit: SubmitHandler<TSkillForm> = (data) => {
    mutate(data?.workExperience || []);
  };

  return (
    <FormProvider {...methods}>
      <form className="flex items-center flex-col" onSubmit={handleSubmit(onSubmit)}>
        <ArrayInput name="workExperience" data={user?.workExperience} />
        <Button className="m-2 w-fit">Submit Work Experience Details</Button>
      </form>
    </FormProvider>
  );
}
