import { TUser } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function useSubmitData(formType: string) {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: any) => {
      return await axios.post(`/api?form=${formType}`, data);
    },
    onSuccess: (data) => {
      router.push('/')
      // If you want to stay on the same page please invalidate the userinfo query
    },
  });
}
