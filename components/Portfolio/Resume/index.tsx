import { TEducation, TWorkExperience } from "@/types/user";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import styles from "@/components/css/Resume.module.css";

type ResumeProps = {
    education: TEducation[],
    workExperience: TWorkExperience[]
}

export default function Resume(props: ResumeProps) {
    const {education, workExperience} = props
  return (
    <div className={styles["resume-container"]}>
      <h1>My Resume</h1>
      <WorkExperience workExperience={workExperience}/>
      <Education education={education}/>
    </div>
  );
}
