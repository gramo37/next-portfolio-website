"use client";

import { FormProvider, useForm } from "react-hook-form";
import Formview from ".";
import { Button } from "../ui/button";

export default function FormContainer(props: any) {
  const { data } = props;
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Formview data={data} name="" />
        <Button
          type="submit"
          className="fixed top-3 right-3 text-sm px-[0.32rem] h-auto m-0 sm:text-lg sm:p-2"
        >
          Submit
        </Button>
      </form>
    </FormProvider>
  );
}
