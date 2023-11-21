"use client";

import { FormProvider, useForm } from "react-hook-form";
import Formview from ".";
import { Button } from "../ui/button";
import useSubmitData from "@/hooks/useSubmitData";
import Logout from "../ui/CustomLogoutButton";

export default function FormContainer(props: any) {
  const { data } = props;
  const methods = useForm();
  const { mutate } = useSubmitData("all");
  const onSubmit = (data: any) => {
    mutate(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Formview data={data} name="" />
        <div className="flex justify-center items-center text-sm m-2 px-[0.32rem] h-auto sm:text-lg sm:p-2">
          <Button className="mx-1" type="submit">
            Submit
          </Button>
          <Logout className="mx-1" />
        </div>
      </form>
    </FormProvider>
  );
}
