import styles from './Navbar.module.css'
import LevelUpWorks from "../../assets/NavBar/LevelUpWorks-blue.png"
import MaoriFlag from '../../assets/NavBar/MaoriFlag.png'
import NZFlag from '../../assets/NavBar/NZFlag.png'
import { NavLink } from 'react-router'

export default function Navbar(){
    return(
        <>
            <div className={styles.navbar}>
                <NavLink to="/"><img src={LevelUpWorks} alt= "logo" className={styles.levelBlueLogo}/></NavLink>
                <div className={styles.rightIcons}>
                    <button className={styles.helpBtn}>HELP CENTER</button>
                    <button className={styles.moreProjectsBtn}>MORE PROJECTS</button>
                    <img src={NZFlag} alt="NZFlag" className={styles.flags}/>
                    <img src={MaoriFlag} alt="MaoriFlag" className={styles.flags}/>
                </div>
            </div>
        </>
    )
}