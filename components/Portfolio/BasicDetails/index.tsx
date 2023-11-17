import { TUser } from "@/types/user";
import Dashboard from "./Dashboard";
import About from "./About";

export default function BasicDetails(props: TUser) {
  const { email, name, description, profession, phone, ...links } = props;
  return (
    <>
    {console.log(name)}
      <Dashboard name={name} profession={profession} {...links} />
      <About
        name={name}
        phone={phone}
        email={email}
        {...links}
        description={description}
      />
    </>
  );
}
