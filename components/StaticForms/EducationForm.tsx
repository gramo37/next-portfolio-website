import useSubmitData from "@/hooks/useSubmitData";
import { TEducation } from "@/types/user";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import ArrayInput from "../DynamicInputs/ArrayInput";
import { Button } from "../ui/button";

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
      <form className="flex items-center flex-col" onSubmit={handleSubmit(onSubmit)}>
        <ArrayInput name="education" data={user?.education}/>
        <Button className="m-2">Submit Education Details</Button>
      </form>
    </FormProvider>
  );
}
