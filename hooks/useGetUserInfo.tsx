import { userRoute } from "@/constants";
import { TUser } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetUserInfo() {
  const query = useQuery({
    queryKey: ["userinfo"],
    queryFn: async (): Promise<TUser | any> => {
        return await axios.get(userRoute)
    }
  });

  return {...query, user: query?.data?.data?.user}
}
