import React from "react";
import logo from "../../assets/NavBar/LevelUpWorks-blue.png";
import NZFlag from "../../assets/NavBar/NZFlag.png";
import MaoriFlag from "../../assets/NavBar/MaoriFlag.png";
import styles from "./Studentnavbar.module.css";

const StudentDashboardNavbar = ({
  // Progress dots config = 15 total steps
  currentStep = 1,
  totalSteps = 15,
  projectSubtitle = "Introduction",
  isSubmitted = true,
  onHelpClick = () => {},
  onMoreProjectsClick = () => {},
}) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <img src={logo} alt="LevelUpWorks Logo" className={styles.logo} />
        <div className={styles.projectInfo}>
          <h1 className={styles.projectTitle}>PROJECT</h1>
          <p className={styles.projectSubtitle}>Introduction</p>
        </div>

        <div className={styles.progressSection}>
          <div className={styles.currentStep}>
            <span className={styles.stepNumber}>{currentStep}</span>
          </div>

          <div className={styles.progressDots}>
            {Array.from({ length: totalSteps }, (_, index) => (
              <div
                key={index}
                className={`${styles.progressDot} ${
                  index < currentStep ? styles.active : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.navbarRight}>
        <button className={`${styles.btn} ${styles.btnSubmitted} `}>
          Project Submitted
        </button>
        <button className={`${styles.btn} ${styles.btnHelp} `}>
          Ask Teacher for help
        </button>
        <button className={`${styles.btn} ${styles.btnProjects} `}>
          More Projects
        </button>

        <div className={styles.languageFlags}>
          <img src={NZFlag} alt="NZ Flag" className={styles.flagIcon} />
          <img src={MaoriFlag} alt="Maori Flag" className={styles.flagIcon} />
        </div>
      </div>
    </nav>
  );
};

export default StudentDashboardNavbar;
