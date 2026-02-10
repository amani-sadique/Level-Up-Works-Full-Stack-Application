import styles from './SideBar.module.css'
import { NavLink } from 'react-router'
import HelpImg from '../../assets/TeacherDashboard/helpRequests.png';
import HelpImgSelected from '../../assets/TeacherDashboard/helpRequestsSelected.png';
import progressImg from '../../assets/TeacherDashboard/progressTracker.png';
import progressSelected from '../../assets/TeacherDashboard/progressTrackerSelected.png';
import projectImg from '../../assets/TeacherDashboard/projectLibrary.png';
import projectSelected from '../../assets/TeacherDashboard/projectLibrarySelected.png';
import studentProfImg from '../../assets/TeacherDashboard/studentProfiles.png';
import studentProfImgSelected from '../../assets/TeacherDashboard/studentProfilesSelected.png';
import projectSubmit from '../../assets/TeacherDashboard/projectSubmissions.png';
import projectSubmitSelected from '../../assets/TeacherDashboard/projectSubmissionsSelected.png';
import profile from '../../assets/profile.png';
import logout from '../../assets/logout.png';
import settings from '../../assets/settings.png';
import arrow from '../../assets/arrowLeft.png';
import userImage from '../../../public/images/teachers/JasminaSalvador.png'

export default function SideBar({isNavOpen, handleClick}){
    
    const handleNavClick = (e) => {
            if (!isNavOpen) {
                /*if isNavOpen === false */
                e.preventDefault(); // stop navigation when sidebar closed
            }
        };
        //Sidebar links
        const links =[
            {   label: "PROGRESS TRACKER", path: "progresstracker", icon: progressImg, activeIcon: progressSelected},
            {   label: "STUDENT PROFILE", path: "studentprofiles", icon: studentProfImg, activeIcon: studentProfImgSelected},
            {   label: "HELP REQUESTS", path: "helprequests", icon: HelpImg, activeIcon: HelpImgSelected},
            {   label: "PROJECT SUBMISSIONS", path: "projectsubmissions", icon: projectSubmit, activeIcon:projectSubmitSelected},
            {   label: "PROJECT LIBRARY", path: "/ProjectLibrary", icon: projectImg , activeIcon: projectSelected},
        ];

        //Sidebar links mapped with NavLink isActive
        const mappedLinks = links.map((link) => (
        <li key={link.label} className={styles.menuItem}>
          <NavLink
            to={link.path}
            onClick={handleNavClick}
            className={({ isActive }) => (isActive ? styles.navLinkActive : "")}
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? link.activeIcon : link.icon}
                  className={styles.sidenav}
                  alt={link.label}
                />
                {link.label}
              </>
            )}
          </NavLink>
        </li>
      ));
        //Footer links
        const footerPaths =[
            {   label: "Profile", path: `/TeacherProfileViewer/user/1`, icon: profile},
            {   label: "Settings", path: "#", icon: settings},
            {   label: "Log Out", path: "#", icon: logout},
        ];

        //mapped footer links
        const mappedFooterPaths = footerPaths.map((footLink)=>(
                                            <li key={footLink.label} className={styles.footerLink}>
                                                <NavLink to={footLink.path} onClick={handleNavClick}>
                                                    <img src={footLink.icon}/>{footLink.label}
                                                </NavLink>
                                            </li>
                                        ))
        return(
        <>
                        <nav className={` ${isNavOpen? styles["nav-open"] : styles["nav-close"]}`} onClick={handleClick}>
                            <div className={styles.userImageContainer}>
                                <NavLink to="/TeacherProfileViewer" onClick={handleNavClick}>
                                    <img src={userImage}  alt="userImage" className={isNavOpen? styles.userImage : styles.userImageHidden}/>
                                </NavLink>
                                    {isNavOpen? <img className={styles.arrow} src={arrow}/>:<img className={styles.arrowflip} src={arrow} onClick={handleClick}/>}
                            </div>

                            <div className={styles.sideWrap}>
                                <ul className={styles.menuList}>

                                         {mappedLinks}  
                                </ul>

                                <ul className={isNavOpen? styles.footer : styles.footerClose}>

                                        {mappedFooterPaths}

                                </ul>
                                
                            </div>
                        </nav>
        </>
    )
}