import { TUserDetails } from "@/types/user";
import BasicDetails from "./BasicDetails/index";
import Skills from "./Skills";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";
import GoToTop from "./GoToTop";

export default function Portfolio(props: TUserDetails) {
  const { education, skills, project, workExperience, ...rest } = props;
  const links = {
    twitter_link: rest.twitter_link,
    linkedin_link: rest.linkedin_link,
    github_link: rest.github_link,
  };
  return (
    <>
      <GoToTop />
      <BasicDetails {...rest} />
      <Resume education={education} workExperience={workExperience} />
      <Skills skills={skills} />
      <Projects project={project} />
      <Contact />
      <Footer {...links} />
    </>
  );
}
