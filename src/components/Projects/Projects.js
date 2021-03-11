import React from "react";
import styles from "./styles.module.css";
import website from "./bouya.gif";
import gym from "./gym.gif";
import todolist from "./todolist.gif";
import todolistjs from "./todolistjs.gif";
import bose from "./bose.gif";
import dslwebsite from "./dslwebsite.gif";

function Projects() {
  return (
    <div>
      <section className={styles.sectionProjects}>
        {/* title */}
        <h1 className={styles.heading1}>Projects</h1>
        {/* article 1 */}
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
            <p>Affordable professional Web Design</p>
            <div className={styles.tools}>
              <span className={styles.span}>HTML5</span>
              <span className={styles.span}>CSS3</span>
              <span className={styles.span}>Responsive</span>
            </div>
            <a
              href="https://github.com/ayoubbouya/BouyaWebDesign"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://bouyawebdesign.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </article>
        {/* article 2 */}
        <article className={styles.article1}>
          <div className={styles.part2}>
            <h2>Gym Web Design</h2>
            <p>Gym - Website Simple Responsive</p>
            <div className={styles.tools}>
              <div className={styles.span}>HTML5</div>
              <div className={styles.span}>CSS3</div>
              <div className={styles.span}>Responsive</div>
            </div>
            <a
              href="https://github.com/ayoubbouya/gym"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://ayoubbouya.github.io/gym/"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fas fa-external-link-alt"></i>
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
        {/* article 3 */}
        <article className={styles.article}>
          <div className={styles.part1}>
            <img
              className={styles.website}
              src={todolistjs}
              alt="Todo List App with React Js"
            />
          </div>
          <div className={styles.part2}>
            <h2>Todo List App</h2>
            <p>Create a To-Do List Application with HTML, CSS, and Pure JS</p>
            <div className={styles.tools}>
              <div className={styles.span}>HTML5</div>
              <div className={styles.span}>CSS3</div>
              <div className={styles.span}>Javascript</div>
            </div>
            <a
              href="https://github.com/ayoubbouya/TodoList/"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://todo-list-ayoub-bouya.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </article>
        {/* article 4 */}
        <article className={styles.article1}>
          <div className={styles.part2}>
            <h2>TODOLIST APP</h2>
            <p>Todo List App with React Js</p>
            <div className={styles.tools}>
              <div className={styles.span}>JSX</div>
              <div className={styles.span}>CSS3</div>
              <div className={styles.span}>ReactJs</div>
            </div>
            <a
              href="https://github.com/ayoubbouya/TodoListReactJs/"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://todolistayoubbouya.netlify.app//"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
          <div className={styles.part1}>
            <img
              className={styles.website}
              src={todolist}
              alt="web site design responsive"
            />
          </div>
        </article>
        {/* article 5 */}
        <article className={styles.article}>
          <div className={styles.part1}>
            <img
              className={styles.website}
              src={bose}
              alt="web site design responsive"
            />
          </div>
          <div className={styles.part2}>
            <h2>Bose Website</h2>
            <p>Responsive website - Affordable professional Web Design</p>
            <div className={styles.tools}>
              <div className={styles.span}>jsx</div>
              <div className={styles.span}>Reactjs</div>
              <div className={styles.span}>router</div>
              <div className={styles.span}>SlickSlider</div>
              <div className={styles.span}>Bootstrap</div>
            </div>
            <a
              href="https://github.com/ayoubbouya/bose-web/"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://boseweb.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </article>
        {/* article 6 */}
        <article className={styles.article1}>
          <div className={styles.part2}>
            <h2>DSL Website</h2>
            <p>
              Responsive website - Making the most of the ever-growing
              Information Technology
            </p>
            <div className={styles.tools}>
              <div className={styles.span}>jsx</div>
              <div className={styles.span}>Reactjs</div>
              <div className={styles.span}>router</div>
              <div className={styles.span}>Slick</div>
              <div className={styles.span}>Bootstrap</div>
            </div>
            <a
              href="https://github.com/ayoubbouya/website-dsl/"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://dsl-web-site.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
          <div className={styles.part1}>
            <img
              className={styles.website}
              src={dslwebsite}
              alt="Information Technology"
            />
          </div>
        </article>
      </section>
      <h5 className={styles.heading5}>
        © 2021 | Developed with ❤ by Ayoub BOUYA{" "}
      </h5>
    </div>
  );
}

export default Projects;
