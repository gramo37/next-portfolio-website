import SubmitButton from "@/components/ui/SubmitButton";
import useSubmitData from "@/hooks/useSubmitData";
import { TSkill } from "@/types/user";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import ArrayInput from "../DynamicInputs/ArrayInput";
import { Button } from "../ui/button";

type TSkillForm = {
  skills: TSkill[];
};

export default function SkillForm(props: any) {
  const { user } = props;
  const methods = useForm<TSkillForm>();
  const { handleSubmit } = methods;
  const { mutate } = useSubmitData("skills");

  const onSubmit: SubmitHandler<TSkillForm> = (data) => {
    mutate(data?.skills || []);
  };

  return (
    <FormProvider {...methods}>
      <form className="flex items-center flex-col" onSubmit={handleSubmit(onSubmit)}>
        <ArrayInput name="skills" data={user?.skills} />
        <Button className="m-2">Submit Skill Details</Button>
      </form>
    </FormProvider>
  );
}
