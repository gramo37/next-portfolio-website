"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { TLoginForm } from "@/types/components";
import useLogin from "@/hooks/useLogin";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const methods = useForm<TLoginForm>();
  const { data, mutate, isPending: isLoading } = useLogin();

  React.useEffect(() => {
    // set token in cookie
    if (data?.data?.token) document.cookie = `auth=${data?.data?.token}`; 
  }, [data]);

  const onSubmit: SubmitHandler<TLoginForm> = (data) => {
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <div className={cn("grid gap-6", className)} {...props}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                {...methods.register("email")}
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Password
              </Label>
              <Input
                id="password"
                {...methods.register("password")}
                placeholder="Enter your password"
                type="password"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <Button disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Login
            </Button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
