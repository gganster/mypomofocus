import React from "react";
import Hooks from "../hooks";

import styles from "../styles/components/GoogleLoginButton.module.scss";

import GoogleIcon from "../assets/g-logo.png";

const GoogleLoginButton = (props) => {
  const {
    onClick,
    className
  } = props;
  const {googleLogin} = Hooks.useLogin();

  return (
    <div className={`${styles.container} ${className ?? ""}`} onClick={onClick ?? googleLogin}>
      <img src={GoogleIcon} className={styles.icon} />
      <span className={styles.text}>
        Login with Google
      </span>
    </div>
  )
}

export default GoogleLoginButton;