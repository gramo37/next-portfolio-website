import { Metadata } from "next";
import { UserAuthForm } from "@/components/auth/user-auth-form";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative h-[100vh] flex-col items-center justify-center grid max-w-none grid-cols-1 px-0">
        <div className="px-12 p-8 border m-auto">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login To Edit Portfolio
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
}
