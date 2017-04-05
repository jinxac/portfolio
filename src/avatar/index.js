import React from "react";
const img = require("./harkirat.png");
import styles from "./style.css";

const Avatar = () => (
  <img className={styles.avatar} src={img} />
);

export default Avatar;
