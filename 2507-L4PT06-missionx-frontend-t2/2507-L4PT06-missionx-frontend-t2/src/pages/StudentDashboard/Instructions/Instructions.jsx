import React from "react";
import logo from "..//..//..//assets/StudentDashboard/Project01-instructions.png";
import styles from "./Instructions.module.css";

const Instructions = () => {
  return (
    <div className={styles.instructionsContainer}>
      <div className={styles.instructionsContent}>
        <section className={styles.instructionSection}>
          <h2 className={styles.instructionTitle}>1. JOIN SCRATCH</h2>
          
          <p className={styles.instructionText}>
            If you haven't used scratch before, you will need to join Scratch first.
          </p>

          <p className={styles.instructionsText}>
            Go to <a href="https://scratch.mit.edu" target="_blank" rel="noopener noreferrer" className={styles.instructionLink}>https://scratch.mit.edu </a> .Click on <span className={styles.instructionLink}>Join Scratch</span>
          </p>
        

    <div className={styles.instructionsImageContainer}>
    <img src={logo} alt="Project01-instructions" className={styles.logo} />
    </div>

       <p className={styles.instructionText}>
        Follow the instructions to join. You will need a username and a password that you will remember. If possible, you should also verify your email address so that you can Share projects later. Ask your teacher to help with this step if you don't have an email address, or if you are not sure what to do
       </p>
    </section>
   </div>
   </div>
  );
};


export default Instructions;