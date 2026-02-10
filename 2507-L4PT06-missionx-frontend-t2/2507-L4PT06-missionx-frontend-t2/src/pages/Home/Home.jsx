import NavBar from "../../common/Navbar";
import Footer from "../../common/Footer";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../../pages/LoginSignup/Modal";
import LoginSignup from "../../pages/LogInSignUp/LoginSignup";

// IMAGES //
import HeroImage from "../../assets/Home/hero.png";
import animation from "../../assets/Home/animation.png";
import games from "../../assets/Home/games.png";
import chatbots from "../../assets/Home/chatbots.png";
import augmented from "../../assets/Home/augreality.png";
import laptop1 from "../../assets/Home/laptop1.png";
import laptop2 from "../../assets/Home/laptop2.png";
import laptop3 from "../../assets/Home/laptop3.png";
import laptop4 from "../../assets/Home/laptop4.png";
import skill1 from "../../assets/Home/group1.png";
import skill2 from "../../assets/Home/group2.png";
import skill3 from "../../assets/Home/group3.png";
import skill4 from "../../assets/Home/group4.png";
import lastImage from "../../assets/Home/classroom.png";
import star from "../../assets/Home/star.png";

export default function Home() {
  const laptops = [laptop1, laptop2, laptop3, laptop4];
  const [currentLaptop, setCurrentLaptop] = useState(0);

  const nextLaptop = () => {
    setCurrentLaptop((prev) => (prev + 1) % laptops.length);
  };

  const [showAuthModal, setShowAuthModal] = useState(false);

  const [activeTab, setActiveTab] = useState("KEY COMPETENCIES");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLaptop((prev) => (prev + 1) % laptops.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.ParentContainer}>
      {/* code breaks without this ^^^^^ */}
      <div className={styles.heroSection}>
        <NavBar />

        <div
          className={styles.heroContainer}
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className={styles.overlay}>
            <h1 className={styles.heroHeading}>
              Prepare young minds for a better{" "}
              <span className={styles.colouredText}>future.</span>
            </h1>

            <p className={styles.heroSubtext}>
              Let us help you advance students in Digital Technologies and other
              learning areas with our project-based learning programme.
            </p>

            <div className={styles.buttonRow}>
              <div className={styles.signUpSection}>
                <button className={styles.learnBtn}>LEARN MORE</button>
              </div>

              <div className={styles.signUpSection}>
                {showAuthModal && (
                  <Modal onClose={() => setShowAuthModal(false)}>
                    <LoginSignup onClose={() => setShowAuthModal(false)} />
                  </Modal>
                )}

                <button
                  className={styles.signUpBtn}
                  onClick={() => setShowAuthModal(true)}
                >
                  SIGN UP
                </button>

                <p className={styles.signUpText}>
                  *Basic subscription includes the first 15 projects free of
                  charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================================================================================================================================= */}

      <div className={styles.homeSection}>
        {/* this is the container for the whole home section */}

        <div className={styles.whatWeOffer}>
          <div className={styles.homeSectionLeft}>
            <h1>What we offer</h1>
            <p>
              The Creative Problem Solving programme is series of digital
              creation projects aimed to encourage self-motivation and student
              agency, designed by New Zealand&#39;s leading IT industry experts
              and schools.
            </p>
            {/* BLUE LOGOS */}
            <h1>What will students create?</h1>
            <div className={styles.imageRow}>
              <button
                className={styles.blueImages}
                onClick={() => setCurrentLaptop(0)}
              >
                <img src={animation} alt="Animation" />
              </button>

              <button
                className={styles.blueImages}
                onClick={() => setCurrentLaptop(1)}
              >
                <img src={games} alt="Games" />
              </button>

              <button
                className={styles.blueImages}
                onClick={() => setCurrentLaptop(2)}
              >
                <img src={chatbots} alt="Chatbots" />
              </button>

              <button
                className={styles.blueImages}
                onClick={() => setCurrentLaptop(3)}
              >
                <img src={augmented} alt="Augmented Reality" />
              </button>
            </div>
          </div>

          <div className={styles.laptopCarousel}>
            <img
              src={laptops[currentLaptop]}
              className={styles.laptopImage}
              alt="Laptop preview"
            />

            {/* DOTS */}
            <div className={styles.carouselDots}>
              {laptops.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${
                    currentLaptop === index ? styles.activeDot : ""
                  }`}
                  onClick={() => setCurrentLaptop(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================================================================================================================================= */}

        <section className={styles.moreThanCode}>
          <p className={styles.sectionIntro}>
            Teaching kids programming and digital skills is <b>MORE</b> than
            just writing code.
          </p>

          <div className={styles.skillCards}>
            <div className={styles.skillCard}>
              <img src={skill1} alt="" />
            </div>

            <div className={styles.skillCard}>
              <img src={skill2} alt="" />
            </div>

            <div className={styles.skillCard}>
              <img src={skill3} alt="" />
            </div>

            <div className={styles.skillCard}>
              <img src={skill4} alt="" />
            </div>
          </div>
        </section>

        <br></br>
        <div className={styles.tabs}>
          {[
            "LEARNING PATHWAYS",
            "DIGITAL TECHNOLOGIES",
            "KEY COMPETENCIES",
            "IR4.0",
          ].map((tab) => (
            <button
              key={tab}
              className={`${styles.tabBtn} ${
                activeTab === tab ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <br></br>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// GREY SECTION */}

        <div className={styles.keyCompetencies}>
          <h3>Enhance key competencies</h3>

          <h4>
            The programme enhances capabilities of students in the 5 Key
            Competencies identified in the New Zealand Curriculum:
          </h4>

          <div className={styles.competencies}>
            <div className={styles.competency}>
              <div className={styles.competencyHeader}>
                <img src={star} alt="" className={styles.starIcon} />
                <h5>THINKING</h5>
              </div>
              <p>
                Problem solving, design thinking and computational thinking.
              </p>
            </div>

            <div className={styles.competency}>
              <div className={styles.competencyHeader}>
                <img src={star} alt="" className={styles.starIcon} />
                <h5>DISCERNING CODES</h5>
              </div>
              <p>
                Analysing language, symbols, and texts to understand how
                knowledge is expressed.
              </p>
            </div>

            <div className={styles.competency}>
              <div className={styles.competencyHeader}>
                <img src={star} alt="" className={styles.starIcon} />
                <h5>SELF-MANAGEMENT</h5>
              </div>
              <p>
                Projects are designed to motivate students to explore and
                experiment independently.
              </p>
            </div>

            <div className={styles.competency}>
              <div className={styles.competencyHeader}>
                <img src={star} alt="" className={styles.starIcon} />
                <h5>RELATIONSHIPS WITH PEERS</h5>
              </div>
              <p>
                Students interact in unplugged sessions, listen actively, and
                share ideas.
              </p>
            </div>

            <div className={styles.competency}>
              <div className={styles.competencyHeader}>
                <img src={star} alt="" className={styles.starIcon} />
                <h5>PARTICIPATION & COLLABORATION</h5>
              </div>
              <p>
                Encourages involvement in communities such as school, family,
                and whānau.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.lastSection}>
          <div className={styles.leftSection}>
            <img src={lastImage} />
          </div>

          <div className={styles.rightSection}>
            <h2>What are you waiting for?</h2>

            <p className={styles.primaryText}>
              Start teaching Digital Technologies today.
            </p>

            <p className={styles.secondaryText}>
              If you need more information, we are happy to answer any questions
              you may have.
            </p>

            <div className={styles.ctaButtons}>
              <button className={styles.enquireBtn}>ENQUIRE NOW</button>
              <button
                className={styles.signUpBtn}
                onClick={() => setShowAuthModal(true)}
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
