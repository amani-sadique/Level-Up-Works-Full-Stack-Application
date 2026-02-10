import React from "react";
import logo from "..//..//..//assets/StudentDashboard/makeProject-screenshot.png";
import styles from "./MakeProject.module.css";

const MakeProject = () => {
      return (
      <div className={styles.makeProjectContainer}>
      <div className={styles.makeProjectContent}>
      <img src={logo} alt="makeProject-screenshot" className={styles.logo} />
      </div>
      </div>
    );
  };


export default MakeProject