import { useState, useRef, useEffect } from "react";
 import styles from "./Navbar.module.css";


import UserImg from "../assets/NavBar/Avatar-white.png";
import LevelUpWorksWhite from "../assets/NavBar/LevelUpWorks-white.png";
import MaoriFlag from "../assets/NavBar/MaoriFlag.png";
import NZFlag from "../assets/NavBar/NZFlag.png";


import { Link, NavLink } from "react-router";
import Modal from "../pages/LoginSignup/Modal"; 
import LoginSignup from "../pages/LogInSignUp/LoginSignup";


export default function Home() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <NavBarBlue setShowAuthModal={setShowAuthModal} />

      {/* AUTH MODAL OUTSIDE NAV */}
      {showAuthModal && (
        <Modal onClose={() => setShowAuthModal(false)}>
          <LoginSignup onClose={() => setShowAuthModal(false)} />
        </Modal>
      )}
    </>
  );
}

// SEPARATE COMPONENT
function NavBarBlue({ setShowAuthModal }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

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

      <ul className={styles.navLinks}>
        <li><NavLink to="/" className={styles.link}>HOME</NavLink></li>
        <li><NavLink to="/ProjectLibrary" className={styles.link}>PROJECTS</NavLink></li>
        <li><NavLink to="/TeacherDashboard" className={styles.link}>TEACHERS</NavLink></li>
      </ul>

      <div className={styles.rightSide}>
        <div className={styles.rightIconSide}>
          <p>LANG</p>
          <img src={NZFlag} alt="nz-flag" className={styles.flags} />
          <img src={MaoriFlag} alt="maori-flag" className={styles.flags} />
        </div>

        <div className={styles.teacher} ref={dropdownRef}>
          <img
            src={UserImg}
            alt="user-img"
            className={styles.smallTeacherImg}
          />

          <span className={styles.registerBtn} onClick={() => setShowAuthModal(true)}>
            REGISTER |
          </span>

          <span className={styles.loginBtn} onClick={() => setShowAuthModal(true)}>
             ‎ LOGIN
          </span>
        </div>
      </div>
    </div>
  );
}