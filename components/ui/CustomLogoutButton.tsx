"use client";

import { Button } from "./button";
import { useRouter } from "next/navigation";
import { useToast } from "./use-toast";
import { getCookie } from "../utils";
import { cn } from "@/lib/utils";

interface TLogoutProps extends React.HTMLAttributes<HTMLElement> {}

export default function Logout({ className }: TLogoutProps) {
  const router = useRouter();
  const {toast} = useToast();
  const logout = () => {
    document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/login");
    toast({
      variant: "success",
      title: "Success",
      description: "Logout Successfull",
    });
    // if(getCookie("auth") === null) {
    // }
  };
  return (
    <Button className={cn("w-fit", className)} onClick={logout}>
      Logout
    </Button>
  );
};
