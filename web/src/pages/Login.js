import React from "react";
import CPNT from "../components";

import styles from "../styles/pages/Login.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <CPNT.Card>
        <h1 className={styles.title}>Login</h1>
        <CPNT.GoogleLoginButton />
      </CPNT.Card>
    </div>
  )
}

export default Login;