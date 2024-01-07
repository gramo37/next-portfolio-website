import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { TLoginForm } from "@/types/components";
import { useRouter } from "next/navigation";
import { loginRoute } from "@/constants";

export default function useLogin() {
  const router = useRouter();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: TLoginForm) => {
      const token = await axios.post(loginRoute, data);
      if (token?.data?.token) {
        document.cookie = `auth=${token?.data?.token}`;
        toast({
          variant: "success",
          title: "Success",
          description: "Login Successful",
        });
        router.push("/userinfo");
      } else if (token?.data?.error) {
        toast({
          variant: "destructive",
          title: "Failure",
          description: token?.data?.error,
        });
      }
      return token;
    },
  });
}
