import styles from "./NavBarBlueT.module.css";
import LevelUpWorksWhite from "../../assets/NavBar/LevelUpWorks-white.png";
import MaoriFlag from "../../assets/NavBar/MaoriFlag.png";
import NZFlag from "../../assets/NavBar/NZFlag.png";
import pfp from "/images/students/RawiriFletcher.png"
import { Link } from "react-router";
import { NavLink } from "react-router";

export default function NavBarBlueT({users}){
    const mapUser = users.map(user=>{
        return(
            <>
                <p className = {styles.user}>{user.name}</p>
            </>
        )
    })
    return(
        <div className={styles.blueNavbar}>
            <div>
                <Link to="/"><img src={LevelUpWorksWhite} alt="levelup-logo" className={styles.logoImg}/></Link>
            </div>
            <div>
                <ul className={styles.navLinks}>
                    <li ><NavLink to="/" className={styles.link}>HOME</NavLink></li>
                    <li ><NavLink to="/ProjectLibrary" className={styles.link}>PROJECTS</NavLink></li>
                    <li ><NavLink to="/TeacherDashboard" className={styles.link}>TEACHERS</NavLink></li>
                </ul>
            </div>
            <div className={styles.rightSide}>
                 <div className={styles.rightIconSide}> 
                                <p>LANG</p>
                                <img src={NZFlag} alt="nz-flag" className={styles.flags}/>
                                <img src={MaoriFlag} alt="maori-flag" className={styles.flags}/>
                 </div> 
                   {/* <NavLink to="/TeacherProfileViewer" className={styles.userProfileLink}> */}
                        <div className={styles.userLink}>
                            <img src={pfp} alt="user-img" className={styles.smallTeacherImg}/>
                            {mapUser}
                        </div> 
                   {/* </NavLink> */}
                
            </div>
         </div>

    )
}
