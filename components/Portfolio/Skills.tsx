import { TSkill } from "@/types/user";
import styles from "@/components/css/Skills.module.css";
import CustomDoughnut from "../ui/CustomDoughnut";

export default function Skills(props: { skills: TSkill[] }) {
  const { skills } = props;
  return (
    <div className={styles["skills-container"]}>
      <h1>Skills</h1>
      <div className={styles["skills-container-information"]}>
        {skills?.map((item, index) => {
          return (
            <div key={index} className={styles["skills-info-item"]}>
              <span className={styles["skills-info-item-label"]}>{item.skill_name}</span>
              <CustomDoughnut {...item}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
