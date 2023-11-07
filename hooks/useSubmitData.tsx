import { TUser } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function useSubmitData() {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: TUser) => {
      return await axios.post("http://localhost:3000/api", data);
    },
    onSuccess: (data) => {
      router.push('/')
    },
  });
}
