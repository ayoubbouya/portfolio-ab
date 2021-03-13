import React from "react";
import styles from "./styles.module.css";
import website1 from "./bouya.gif";
import gym from "./gym.gif";
import todolist from "./todolist.gif";
import todolistjs from "./todolistjs.gif";
import bose from "./bose.gif";
import dslwebsite from "./dslwebsite.gif";
import OneProject from "./OneProject";

function Projects() {
  return (
    <div>
      {/* title */}
      <h1 className={styles.heading1}>Projects</h1>
      {/* article 1 */}

      <OneProject
        image={website1}
        headingH2="Bouya Web Design"
        paragraph1="Affordable professional Web Design"
        tool1="HTML5"
        tool2="CSS3"
        tool3="Responsive"
        tool4="Design web"
        tool5="professional"
        github="https://github.com/ayoubbouya/BouyaWebDesign"
        preview="https://bouyawebdesign.netlify.app"
      />
      <article className={styles.article1}>
        <OneProject
          image={gym}
          headingH2="Gym Web Design"
          paragraph1="Gym - Website Simple Responsive"
          tool1="HTML5"
          tool3="Responsive"
          tool4="Design web"
          tool5="e-commerce"
          github="https://github.com/ayoubbouya/gym"
          preview="https://ayoubbouya.github.io/gym/"
        />
      </article>
      <OneProject
        image={todolistjs}
        headingH2="TodoList"
        paragraph1="Todo List App with Js"
        tool1="HTML5"
        tool3="Javascript"
        tool4="Design web"
        tool5="Responsive"
        github="https://github.com/ayoubbouya/TodoList"
        preview="https://todo-list-ayoub-bouya.netlify.app/"
      />
      <article className={styles.article1}>
        <OneProject
          image={todolist}
          headingH2="Todo List App"
          paragraph1="Todo List App with React Js"
          tool1="Jsx"
          tool3="React Js"
          tool4="Design web"
          tool5="props"
          github="https://github.com/ayoubbouya/TodoListReactJs"
          preview="https://todolistayoubbouya.netlify.app/"
        />
      </article>
      <OneProject
        image={bose}
        headingH2="Bose Website"
        paragraph1="Todo List App with React Js"
        tool1="React Js"
        tool3="Router"
        tool4="Bootstrap"
        tool5="Slick"
        github="https://github.com/ayoubbouya/TodoListReactJs"
        preview="https://todolistayoubbouya.netlify.app/"
      />
      <article className={styles.article1}>
        <OneProject
          image={dslwebsite}
          headingH2="Bose Website"
          paragraph1="Todo List App with React Js"
          tool1="React Js"
          tool3="Router"
          tool4="Bootstrap"
          tool5="Slick"
          github="https://github.com/ayoubbouya/website-dsl"
          preview="https://dsl-web-site.netlify.app/"
        />
      </article>

      <h5 className={styles.heading5}>
        © 2021 | Developed with ❤ by Ayoub BOUYA
      </h5>
    </div>
  );
}

export default Projects;
