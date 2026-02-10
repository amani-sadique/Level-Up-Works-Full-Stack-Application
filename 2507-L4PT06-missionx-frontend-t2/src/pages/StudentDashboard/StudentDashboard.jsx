import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styles from "./StudentDashboard.module.css";
import logo from "../../assets/StudentDashboard/instructionsSelected.png";
import profile from "../../assets/profile.png"
import learning from "../../assets/StudentDashboard/learningObjectivesSelected.png";
import video from "../../assets/StudentDashboard/videoSelected.png";
import make from "..//../assets/StudentDashboard/makeProjectSelected.png";
import submitpro from "..//../assets/StudentDashboard/submitProjectSelected.png";
import StudentDashboardNavbar from "./StudentDashboardNavbar";

function StudentDashboard() {
   const [isCollapsed, setIsCollapsed] = useState(false);

   const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
   };

   return (

   <div className={styles.page}>
     {/* Title of the dashboard */}
     <StudentDashboardNavbar />

     {/* Container that holds the siderbar and the main content area side by side*/}
     <div className={styles.container}>
       {/* Sidebar Section = contains the navigation menu */}
       <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}>
        {/*Profile section */}
        <div className={styles.profileSection}>
          <div className={styles.profileimgae}>
            {/* Add user profile image here */}
            <img src={profile} alt="Student Profile" className={styles.profile} />
          </div>
        </div>

        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <NavLink to="Instructions" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }>
              <img src={logo} alt="instructions" className={styles.logo} />
              Instructions</NavLink>
          </li>

          <li className={styles.menuItem}>
            <NavLink to="LearningObjectives" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }>
              <img src={learning} alt="learning" className={styles.logo} />
              Learning Objectives</NavLink>
          </li>

          <li className={styles.menuItem}>
            <NavLink to="VideoTutorial" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }>
              <img src={video} alt="video" className={styles.logo} />
              Video Tutorial</NavLink>
          </li>

          <li className={styles.menuItem}>
             <NavLink to="MakeProject" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
             }>
              <img src={make} alt="make" className={styles.logo} />
              Make Project</NavLink>
          </li>
        
          <li className={styles.menuItem}>
             <NavLink to="SubmitProject" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
             }>
              <img src={submitpro} alt="submitpro" className={styles.logo} />
              Make Project</NavLink>
          </li>

        </ul>

        <button className={styles.collapseBtn}
        onClick={toggleSidebar}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}>
        <span className={styles.collapseArrow}> {isCollapsed ? "▶" : "◀"}
        </span>
        </button>

        <div className={styles.bottomNav}>
          <button className={styles.bottomNavBtn}>
            <span className={styles.bottomIcon}>👤</span>
            <span className={styles.bottomText}>Profile</span>
          </button>
          <button className={styles.bottomNavBtn}>
            <span className={styles.bottomIcon}>⚙️</span>
            <span className={styles.bottomText}>Settings</span>
          </button>
          <button className={styles.bottomNavBtn}>
            <span className={styles.bottomIcon}>🚪</span>
            <span className={styles.bottomText}>Log out</span>
          </button>
        </div>

       </aside>

    {/* Main content section - displays the nested route's component */}
    <main className={styles.content}>
      <Outlet />
    </main>
    </div>
    </div>
    );
   }

   // Export the component so it can be used in the other files or router setup
   export default StudentDashboard;