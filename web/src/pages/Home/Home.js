import React from "react";
import Header from "./Header";

import styles from "../../styles/pages/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
      </div>
    </div>
  )
}

export default Home;