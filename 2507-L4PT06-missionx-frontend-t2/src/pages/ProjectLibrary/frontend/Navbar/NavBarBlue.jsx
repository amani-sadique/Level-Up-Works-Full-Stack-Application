import { useState, useRef, useEffect } from "react";
import styles from "./NavBarBlue.module.css";
import LevelUpWorksWhite from "../../../../assets/NavBar/LevelUpWorks-white.png";
import MaoriFlag from "../../../../assets/NavBar/MaoriFlag.png";
import NZFlag from "../../../../assets/NavBar/NZFlag.png";
import Image from "/images/teachers/JasminaSalvador.png";
import { Link } from "react-router";
import { NavLink } from "react-router";

export default function NavBarBlue({ users }) {
  const mapUser = users.map((user) => {
    return (
      <div key={user.name}>
        <p
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className={styles.user}
        >
          {user.name.toUpperCase()}
        </p>
      </div>
    );
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.blueNavbar}>
      <div>
        <Link to="/">
          <img
            src={LevelUpWorksWhite}
            alt="levelup-logo"
            className={styles.logoImg}
          />
        </Link>
      </div>
      <div>
        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/" className={styles.link}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/ProjectLibrary" className={styles.link}>
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/TeacherDashboard" className={styles.link}>
              TEACHERS
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.rightIconSide}>
          <p>LANG</p>
          <img src={NZFlag} alt="nz-flag" className={styles.flags} />
          <img src={MaoriFlag} alt="maori-flag" className={styles.flags} />
        </div>

        <div className={styles.teacher} ref={dropdownRef}>
          <img src={Image} alt="user-img" className={styles.smallTeacherImg} />
          <p
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={styles.user}
          >
            {users.teacherUser}
          </p>
          
          {mapUser}

          {dropdownOpen && (
            <div className={styles.dropdown}>
              <NavLink
                to="/TeacherProfileViewer/user/1"
                className={styles.dropdownItem}
              >
                My Profile
              </NavLink>
              <Link to="#" className={styles.dropdownItem}>
                Settings
              </Link>
              <Link to="/" className={styles.dropdownItem}>
                Log out
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
