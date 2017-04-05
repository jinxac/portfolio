import React from "react";
import Avatar from "../avatar";
import styles from "./style.css";

const Home = () => (
  <div>
    <div className={styles.avatarContainer}>
      <Avatar />
      <span className={styles.name}>Harkirat Saluja</span>
      <span className={styles.jobRole}>Full Stack Developer</span>
    </div>
  </div>

);

export default Home;
