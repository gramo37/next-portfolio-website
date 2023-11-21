import { Button } from "./button";
import { useRouter } from "next/navigation";
import { useToast } from "./use-toast";
import { getCookie } from "../utils";

const Logout: React.FC<any> = () => {
  const router = useRouter();
  const {toast} = useToast();
  const logout = () => {
    document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    if(getCookie("auth") === null) {
      router.push("/login");
      toast({
        variant: "success",
        title: "Success",
        description: "Logout Successfull",
      });
    }
  };
  return (
    <Button className="w-fit" onClick={logout}>
      Logout
    </Button>
  );
};

export default Logout;
