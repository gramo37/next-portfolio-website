import { TUser } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetUserInfo() {
  const query = useQuery({
    queryKey: ["userinfo"],
    queryFn: async (): Promise<TUser | any> => {
        return await axios.get("http://localhost:3000/api")
    }
  });

  return {...query, user: query?.data?.data?.user}
}
