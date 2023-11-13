import MultiInput from "@/components/DynamicInputs/MultiInput";
import SingleInput from "@/components/DynamicInputs/SingleInput";
import SubmitButton from "@/components/ui/SubmitButton";
import useSubmitData from "@/hooks/useSubmitData";
import { TUser } from "@/types/user";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Button } from "../ui/button";

export default function UserForm(props: any) {
  const { user } = props;
  const methods = useForm<TUser>({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      profession: user?.profession || "",
      twitter_link: user?.twitter_link || "",
      linkedin_link: user?.linkedin_link || "",
      github_link: user?.github_link || "",
      description: user?.description || [""],
    },
  });
  const { handleSubmit } = methods;
  const { mutate } = useSubmitData("user");

  const onSubmit: SubmitHandler<TUser> = (data) => {
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center">User Info</h1>
        <form className="flex items-center flex-col border p-2 relative" onSubmit={handleSubmit(onSubmit)}>
          <SingleInput name="name" label="name" data={user?.name} />
          <SingleInput name="email" label="email" data={user?.email} />
          <MultiInput name="description" data={user?.description} />
          <SingleInput
            name="profession"
            label="profession"
            data={user?.profession}
          />
          <SingleInput
            name="twitter_link"
            label="twitter_link"
            data={user?.twitter_link}
          />
          <SingleInput
            name="linkedin_link"
            label="linkedin_link"
            data={user?.linkedin_link}
          />
          <SingleInput
            name="github_link"
            label="github_link"
            data={user?.github_link}
          />
          <Button className="w-fit">Submit User Details</Button>
        </form>
      </div>
    </FormProvider>
  );
}
