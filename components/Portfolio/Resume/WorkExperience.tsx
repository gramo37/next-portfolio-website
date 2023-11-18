import { TWorkExperience } from "@/types/user";
import { MdOutlineWork } from "react-icons/md";
import styles from "@/components/css/Resume.module.css"

type TWorkExperienceProps = { workExperience: TWorkExperience[] };

export default function WorkExperience(props: TWorkExperienceProps) {
  const { workExperience } = props;
  return (
    <div className={styles["resume-work-experience-container"]}>
      <div className={styles["resume-status-line"]}></div>
      <div className={styles["resume-work-experience-title"]}>
        <h2>Work Experience</h2>
      </div>
      <div className={styles["resume-work-experience-information"]}>
        {workExperience?.map((item, index) => {
          return (
            <div key={index} className={styles["resume-information-item"]}>
              <div className={styles["resume-information-icon"]}>
                <MdOutlineWork style={{ color: "rgb(237, 129, 13)" }} />
              </div>
              <h3>{item.profession}</h3>
              <p>
                {item.company_name} - {item.duration}
              </p>
              {item.description?.map((key, index) => {
                return <p key={index}>{key}</p>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
