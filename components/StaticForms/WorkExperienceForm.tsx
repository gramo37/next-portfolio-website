import SubmitButton from "@/components/ui/SubmitButton";
import useSubmitData from "@/hooks/useSubmitData";
import { TWorkExperience } from "@/types/user";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import ArrayInput from "../DynamicInputs/ArrayInput";

type TSkillForm = {
  workExperience: TWorkExperience[];
};

export default function WorkExperienceForm(props: any) {
  const { user } = props;
  const methods = useForm<TSkillForm>();
  const { handleSubmit } = methods;

  const { mutate } = useSubmitData("workExperience");

  const onSubmit: SubmitHandler<TSkillForm> = (data) => {
    console.log(data?.workExperience);
    // mutate(data?.skills || []);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ArrayInput name="workExperience" data={user?.workExperience}/>
        <SubmitButton label="Submit Work Experience Details"/>
      </form>
    </FormProvider>
  );
}
