"use client";

import { FaRegArrowAltCircleUp } from "react-icons/fa";
import styles from "@/components/css/GoToTop.module.css";

export default function GoToTop() {
  const goToTopOnClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={goToTopOnClick} className={styles["go-to-top-container"]}>
      <FaRegArrowAltCircleUp style={{ fontSize: 36 }} />
    </div>
  );
}
