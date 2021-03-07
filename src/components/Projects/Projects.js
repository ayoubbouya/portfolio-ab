import React from "react";
import styles from "./styles.module.css";
import website from "./website.png";
import gym from "./gym.gif";
import todolist from "./todolist.gif";

function Projects() {
  return (
    <div>
      <section className={styles.sectionProjects}>
        <h1 className={styles.heading1}>Projects</h1>
        <article className={styles.article}>
          <div className={styles.part1}>
            <img
              className={styles.website}
              src={website}
              alt="web site design responsive"
            />
          </div>
          <div className={styles.part2}>
            <h2>Bouya Web Design</h2>
            <p>Responsive website - Affordable professional Web Design</p>
            <div className={styles.tools}>
              <span className={styles.span}>HTML5</span>
              <span className={styles.span}>CSS3</span>
              <span className={styles.span}>Responsive</span>
            </div>
            <a href="/#" className={styles.icon}>
              <i className="fab fa-github"></i>
            </a>
            <a href="/#" className={styles.icon}>
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.part2}>
            <h2>Gym Web Design</h2>
            <p>Gym - Website Simple Responsive</p>
            <div className={styles.tools}>
              <span className={styles.span}>HTML5</span>
              <span className={styles.span}>CSS3</span>
              <span className={styles.span}>Responsive</span>
            </div>
            <a href="/#" className={styles.icon}>
              <i className="fab fa-github"></i>
            </a>
            <a href="/#" className={styles.icon}>
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
          <div className={styles.part1}>
            <img
              className={styles.website}
              src={gym}
              alt="gym web site responsive"
            />
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.part1}>
            <img
              className={styles.website}
              src={todolist}
              alt="web site design responsive"
            />
          </div>
          <div className={styles.part2}>
            <h2>TODOLIST APP</h2>
            <p>Responsive website - Affordable professional Web Design</p>
            <div className={styles.tools}>
              <span className={styles.span}>HTML5</span>
              <span className={styles.span}>CSS3</span>
              <span className={styles.span}>Responsive</span>
            </div>
            <a href="/#" className={styles.icon}>
              <i className="fab fa-github"></i>
            </a>
            <a href="/#" className={styles.icon}>
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Projects;
