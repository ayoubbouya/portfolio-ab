import { MenuItems } from "./MenuItems";
import styles from "./header.module.css";
import React, { Component } from "react";
import logo from "./ab.png";
export default class header extends Component {
  state = { onCliked: true };
  onHandelClick = () => {
    this.setState({ onCliked: !this.state.onCliked });
  };
  render() {
    return (
      <div>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <h1 className={this.state.onCliked ? styles.logo : styles.logoHide}>
              <img className={styles.logoPng} src={logo} alt="logo" />
            </h1>
            <ul
              className={
                this.state.onCliked ? styles.lists : styles.listsColumn
              }
            >
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.url}
                      className={
                        this.state.onCliked ? styles.li : styles.liColumn
                      }
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className={styles.menu_icon} onClick={this.onHandelClick}>
              <i
                className={this.state.onCliked ? "fas fa-bars" : "fas fa-times"}
              />
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
