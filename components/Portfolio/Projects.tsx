import { TProject } from "@/types/user";
import styles from "@/components/css/Project.module.css"

export default function Projects(props: { project: TProject[] }) {
  const { project } = props;
  return (
    <div className={styles["projects-container"]}>
      <h1>Projects</h1>
      <div className={styles["projects-information"]}>
        {project?.map((item, index) => {
          return (
            <a href={item.project_link}
              key={index}
              style={{ backgroundImage: `url(${item.background_img_url})` }}
              className={styles["project-information-item"]}
            >
              <h3>{item.project_name}</h3>
              {item?.description?.map((key, index) => {
                if (index >= 2) return null;
                return <p key={index}>{key}</p>;
              })}
              {item?.techStack?.map((item, index) => {
                return <span key={index}>{item}</span>
              })}
            </a>
          );
        })}
      </div>
    </div>
  );
}
