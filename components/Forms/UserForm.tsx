import MultiInput from "@/components/MultiInput";
import SingleInput from "@/components/SingleInput";
import SubmitButton from "@/components/SubmitButton";
import useSubmitData from "@/hooks/useSubmitData";
import { TUser } from "@/types/user";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

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
      <h1 className="text-2xl font-bold text-center">User Info</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <SubmitButton label="Submit User Details" />
      </form>
    </FormProvider>
  );
}
