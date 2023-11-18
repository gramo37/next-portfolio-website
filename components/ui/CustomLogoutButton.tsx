import { Button } from "./button";
import { useRouter } from "next/navigation";

const Logout: React.FC<any> = () => {
  const router = useRouter();
  const logout = () => {
    document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/login");
  };
  return (
    <Button className="w-fit" onClick={logout}>
      Logout
    </Button>
  );
};

export default Logout;
