import { TLinks } from "@/types/components";
import Links from "../ui/Links";
import styles from "@/components/css/Footer.module.css";

type TFooterProps = Pick<TLinks, "twitter_link" | "linkedin_link" | "github_link">

export default function Footer(props: TFooterProps) {
  const { ...links } = props;
  return (
    <div className={styles["footer-container"]}>
      <Links {...links} fontSize={25} color="#ed810d" />
      {/* <div style={{opacity: 0}}><Link to="/login">s</Link></div> */}
    </div>
  );
}
