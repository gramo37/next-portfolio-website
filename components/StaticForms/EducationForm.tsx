import SubmitButton from "@/components/ui/SubmitButton";
import useSubmitData from "@/hooks/useSubmitData";
import { TEducation } from "@/types/user";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import ArrayInput from "../DynamicInputs/ArrayInput";

type TEducationForm = {
  education: TEducation[];
};

export default function EducationForm(props: any) {
  const { user } = props;
  const methods = useForm<TEducationForm>();
  const { handleSubmit } = methods;

  const { mutate } = useSubmitData("education");

  const onSubmit: SubmitHandler<TEducationForm> = (data) => {
    mutate(data?.education || []);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ArrayInput name="education" data={user?.education}/>
        <SubmitButton label="Submit Education Details"/>
      </form>
    </FormProvider>
  );
}
