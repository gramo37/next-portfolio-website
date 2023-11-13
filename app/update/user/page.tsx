import FormContainer from "@/components/FormView/FormContainer";
import { getUserInfo } from "@/server_utils/user";

export default async function UpdatePage() {
  const user = await getUserInfo();

  return <FormContainer data={user}/>;
}
