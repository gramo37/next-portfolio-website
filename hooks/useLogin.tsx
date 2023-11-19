import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { TLoginForm } from "@/types/components";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const router = useRouter();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: TLoginForm) => {
      const token = await axios.post(`/api/login`, data);
      return token;
    },
    onSuccess: (data) => {
      toast({
        variant: "success",
        title: "Success",
        description: "Login Successfull",
      });
      router.push("/userinfo");
    },
  });
}
