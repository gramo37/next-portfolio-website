import SubmitButton from "@/components/SubmitButton";
import useSubmitData from "@/hooks/useSubmitData";
import { TWorkExperience } from "@/types/user";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import ArrayInput from "../ArrayInput";

type TSkillForm = {
  workExperience: TWorkExperience[];
};

export default function WorkExperienceForm(props: any) {
  const { user } = props;
  const methods = useForm<TSkillForm>({
    defaultValues: {
      workExperience: user?.workExperience || [],
    },
  });
  const { handleSubmit } = methods;
  const emptyData = {
    company_name: "",
    profession: "",
    duration: "",
    description: [""],
  };
  const { mutate } = useSubmitData("workExperience");

  const onSubmit: SubmitHandler<TSkillForm> = (data) => {
    console.log(data?.workExperience);
    // mutate(data?.skills || []);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ArrayInput name="workExperience" emptyData={emptyData} />
        <SubmitButton />
      </form>
    </FormProvider>
  );
}
