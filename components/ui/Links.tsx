import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import styles from "@/components/css/Link.module.css"
import { TLinks } from "@/types/components";

export default function Links(props: TLinks) {
  const { twitter_link, linkedin_link, github_link, ...options } = props;
  return (
    <div className={styles["links-container"]}>
      <a className={styles["link-icons-container"]} href={twitter_link}>
        <FaTwitter style={options} />
      </a>
      <a className={styles["link-icons-container"]} href={linkedin_link}>
        <FaLinkedin style={options} />
      </a>
      <a className={styles["link-icons-container"]} href={github_link}>
        <FaSquareGithub style={options} />
      </a>
    </div>
  );
}
