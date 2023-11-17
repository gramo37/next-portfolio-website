import styles from "@/components/css/About.module.css";
import Links from "@/components/ui/Links";

type TAboutProps = {
  name: string;
  phone: string;
  email: string;
  twitter_link: string;
  linkedin_link: string;
  github_link: string;
  description: string[];
};

export default function About(props: TAboutProps) {
  const { name, phone, email, description, ...links } = props;
  const resumeLink = "https://drive.google.com/file/d/1x2FyAVHZsbo8aBqcdNSqXAm16QIYmtkM/view";
  return (
    <div className={styles["about-me-container"]}>
      <h1>About Me</h1>
      <div className={styles["about-me-personal-info-container"]}>
        <table className={styles["about-me-personal-info-table"]}>
          <tbody>
            <tr>
              <td className={styles["table-cell-bold"]}>Full Name:</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td className={styles["table-cell-bold"]}>Phone:</td>
              <td>{phone}</td>
            </tr>
            <tr>
              <td className={styles["table-cell-bold"]}>Email:</td>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles["about-me-introduction-container"]}>
        {description?.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <div className={styles["about-me-footer"]}>
        <Links
          {...links}
          fontSize={23}
          color="white"
          backgroundColor="rgb(47, 60, 79)"
          padding={"7px"}
          borderRadius={"5px"}
        />
        <div>
          <a className={styles["download-cv-button"]} href={resumeLink}>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
