import { TEducation } from "@/types/user";
import { IoSchool } from "react-icons/io5";
import styles from "@/components/css/Resume.module.css"

type TEducationProps = { education: TEducation[] };

export default function Education(props: TEducationProps) {
    const {education} = props;
    return (
        <div className={styles["resume-education-container"]}>
        <div className={styles["resume-status-line"]}></div>
        <div className={styles["resume-education-title"]}>
          <h2>Education</h2>
        </div>
        <div className={styles["resume-education-information"]}>
          {education?.map((item, index) => {
            return (
              <div key={index} className={styles["resume-information-item"]}>
                <div className={styles["resume-information-icon"]}>
                  <IoSchool style={{ color: "rgb(237, 129, 13)" }} />
                </div>
                <h3>{item.degree_name}</h3>
                <p>
                  {item.university_name} - {item.duration}
                </p>
                {item?.description?.map((key, index) => {
                  return <p key={index}>{key}</p>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    )
}