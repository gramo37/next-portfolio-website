import { TUserDetails } from "@/types/user";
import BasicDetails from "./BasicDetails/index";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";

export default function Portfolio(props: TUserDetails) {
  const { education, skills, project, workExperience, ...rest } = props;
  return (
    <>
      <BasicDetails {...rest} />
      <br />
      <Education education={education} />
      <br />
      <Skills skills={skills} />
      <br />
      <Projects project={project} />
      <br />
      <WorkExperience workExperience={workExperience} />
    </>
  );
}
