import Links from "@/components/ui/Links";
import backgroundImage from "../../../public/assets/dashboardbg.jpg";
import styles from "@/components/css/Dashboard.module.css";

type TDashboardProps = {
  name: string;
  profession: string;
  twitter_link: string;
  linkedin_link: string;
  github_link: string;
};

export default function Dashboard(props: TDashboardProps) {
  const { name, profession, ...links } = props;
  const profilePhoto = "https://res.cloudinary.com/dwtxio5dn/image/upload/v1676140913/portfolio/prasanna_slx3qm.jpg"
  return (
    <>
      <div className={styles["dashboard-container"]}>
        <div
          className={styles["dashboard-overlay"]}
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
          }}
        ></div>
        <div className={styles["dashboard-info-container"]}>
          {/* Later will be fetched from backend */}
          <div className={styles["dashboard-profile-photo"]} style={{ backgroundImage: `url(${profilePhoto})` }}></div>
          <div className={styles["dashboard-profile-name-container"]}>
            <div className={styles["dashboard-profile-name-line"]}></div>
            <div className={styles["dashboard-profile-name"]}>
              <span>{name}</span>
            </div>
            <div className={styles["dashboard-profile-name-line"]}></div>
          </div>
          <div className={styles["dashboard-profession"]}>
            <span>{profession}</span>
          </div>
          <Links {...links} fontSize={36} color="white" />
        </div>
      </div>
    </>
  );
}
