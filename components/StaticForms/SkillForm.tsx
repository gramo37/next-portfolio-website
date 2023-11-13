import SubmitButton from "@/components/ui/SubmitButton";
import useSubmitData from "@/hooks/useSubmitData";
import { TSkill } from "@/types/user";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import ArrayInput from "../DynamicInputs/ArrayInput";

type TSkillForm = {
  skills: TSkill[];
};

export default function SkillForm(props: any) {
  const { user } = props;
  const methods = useForm<TSkillForm>();
  const { handleSubmit } = methods;
  const emptyData = {
    skill_name: "",
    proficiency: 0,
    maximum_proficiency: 100,
  };
  const { mutate } = useSubmitData("skills");

  const onSubmit: SubmitHandler<TSkillForm> = (data) => {
    console.log(data?.skills)
    // mutate(data?.skills || []);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ArrayInput name="skills" data={user?.skills}/>
        <SubmitButton label="Submit Skill Details"/>
      </form>
    </FormProvider>
  );
}