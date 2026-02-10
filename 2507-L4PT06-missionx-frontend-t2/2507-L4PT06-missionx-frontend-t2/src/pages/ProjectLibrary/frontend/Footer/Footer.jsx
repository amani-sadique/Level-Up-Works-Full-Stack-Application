import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <div>
        <h2 className={styles["footer-title"]}>COMPANY</h2>
        <ul className={styles.li}>
          <li>About Us</li>
          <li>Careers</li>
          <li>Partners</li>
        </ul>
      </div>
      <div>
        <h2 className={styles["footer-title"]}>Courses</h2>
        <ul className={styles.li}>
          <li>Register</li>
          <li>Login</li>
          <li>Projects</li>
          <li>Teachers</li>
          <li>Parents</li>
          <li>Resources</li>
        </ul>
      </div>
      <div>
        <h2 className={styles["footer-title"]}>Support</h2>
        <ul className={styles.li}>
          <li>FAQs</li>
          <li>Helpdesk</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div>
        <h2 className={styles["footer-title"]}>Legal</h2>
        <ul className={styles.li}>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h4 className={styles["footer-title"]}>LevelUp Works</h4>
        <p>
          LevelUp Works is an Auckland-based Enterprise dedicated to developing
          game-based learning software to hlp teachers in response to the New
          Zealand Digital Technologies & Hangarau Matihiko.
        </p>
        <p>alan@levelupworks.com</p>
        <p>(021) 668 185</p>
      </div>
    </div>
  );
}
