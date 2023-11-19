import { TUser } from "@/types/user";
import Dashboard from "./Dashboard";
import About from "./About";

export default function BasicDetails(props: TUser) {
  const { email, name, description, profession, phone, resume_link, profile_photo, ...links } = props;
  return (
    <>
      <Dashboard name={name} profession={profession} profile_photo={profile_photo} {...links} />
      <About
        name={name}
        phone={phone}
        email={email}
        resume_link={resume_link}
        {...links}
        description={description}
      />
    </>
  );
}
