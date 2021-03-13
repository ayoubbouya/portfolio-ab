import React from "react";
import styles from "./styles.module.css";
function OneProject(props) {
  return (
    <div>
      <section className={styles.sectionProjects}>
        <article className={styles.article}>
          <div className={styles.part1}>
            <img
              className={styles.website}
              src={props.image}
              alt="web site design responsive"
            />
          </div>
          <div className={styles.part2}>
            <h2>{props.headingH2}</h2>
            <p>{props.paragraph1}</p>
            <div className={styles.tools}>
              <div className={styles.span}>{props.tool1}</div>
              <div className={styles.span}>CSS3</div>
              <div className={styles.span}>{props.tool3}</div>
              <div className={styles.span}>{props.tool4}</div>
              <div className={styles.span}>{props.tool5}</div>
            </div>
            <a
              href={props.github}
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={props.preview}
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </article>
        {/********** reverse article **************/}
      </section>
    </div>
  );
}

export default OneProject;
