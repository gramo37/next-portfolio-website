import SubmitButton from "@/components/SubmitButton";
import useSubmitData from "@/hooks/useSubmitData";
import { TEducation, TUser } from "@/types/user";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import ArrayInput from "../ArrayInput";

type TEducationForm = {
  education: TEducation[];
};

export default function EducationForm(props: any) {
  const { user } = props;
  const methods = useForm<TEducationForm>({
    defaultValues: {
      education: user?.education || [],
    },
  });
  const { handleSubmit } = methods;
  const emptyData = {
    degree_name: "",
    university_name: "",
    duration: "",
    description: [""],
  };
  const { mutate } = useSubmitData("education");

  const onSubmit: SubmitHandler<TEducationForm> = (data) => {
    mutate(data?.education || []);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ArrayInput name="education" emptyData={emptyData} />
        <SubmitButton />
      </form>
    </FormProvider>
  );
}
