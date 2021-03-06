import React from "react";

import Header from "./Header";
import Timer from "./Timer";
import Tasks from "./Tasks";

import styles from "../../styles/pages/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <Timer />
        <Tasks />
      </div>
    </div>
  )
}

export default Home;