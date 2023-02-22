import React from "react";
import styles from "./styles.module.css";
import profile from "./picture.jpg";
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import Sass from "./sass.png";
import git from "./git.png";
import reactjs from "./reactjs.png";
import redux from "./redux.png";
import bs from "./bs.png";
import ps from "./ps.png";
import figma from "./figma.png";
import linkedin from "./linkedin.png";
import github from "./github.png";
import mail from "./mail.png";
import Pdf from "./AyoubsResume.pdf";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.sectionHome}>
        <div className={styles.part2}>
          <img className={styles.profile} src={profile} alt="profile" />
        </div>
        <div className={styles.headSection}>
          <h1 className={styles.heading1}>
            Hi👋, I am Ayoub,
            <br />
            Front-End Developer
          </h1>
          <p className={styles.paragraph}>
            I describe myself as a passionate Front End Developer who loves
            coding, open-source, and web platform. I'm confident, naturally
            curious, and perpetually working on improving my skills, I want to
            be in a good team, where I could use them for interesting tasks. I
            am a fast learner, responsible, ready for hard tasks.
          </p>
          <p className={styles.paragraph}></p>
//           <button
//             className={styles.btn}
//             trailingIcon="picture_as_pdf"
//             label="Resume"
//           >
//             <a href={Pdf} without rel="noopener noreferrer" target="_blank">
//               Download Resume
//             </a>
//           </button>

          <h1 className={styles.heading2}>Skills</h1>
          <div className={styles.pictureSkills}>
            <img className={styles.skill} src={html} alt="HTML" />
            <img className={styles.skill} src={css} alt="CSS" />
            <img className={styles.js} src={js} alt="JS" />
            <img className={styles.skill} src={Sass} alt="Sass" />
            <img className={styles.skill} src={bs} alt="bootstrap" />
            <img className={styles.skill} src={reactjs} alt="Reactjs" />
            <img className={styles.redux} src={redux} alt="Redux" />
            <img className={styles.skill} src={git} alt="GIT" />
            <img className={styles.skill} src={ps} alt="photoshop" />
            <img className={styles.figma} src={figma} alt="figma" />
          </div>
          <h1 className={styles.heading2}>Contacts</h1>
          <div className={styles.pictureContacts}>
            <a
              href="https://www.linkedin.com/in/ayoubbouya//"
              target="_blank"
              rel="noreferrer"
            >
              <img className={styles.contact} src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://github.com/ayoubbouya/"
              target="_blank"
              rel="noreferrer"
            >
              <img className={styles.contact} src={github} alt="github" />
            </a>
            <a href="mailto:bouya.ayoub1@gmail.com?Subject=Some%20subject">
              <img className={styles.mail} src={mail} alt="mail" />
            </a>
          </div>
          <h5 className={styles.heading5}>
            © 2023 | Developed with ❤ by Ayoub BOUYA{" "}
          </h5>
        </div>
      </section>
    </div>
  );
}

export default Home;
