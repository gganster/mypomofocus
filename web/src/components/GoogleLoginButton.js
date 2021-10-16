import React from "react";
import styles from "../styles/components/GoogleLoginButton.module.scss";

import GoogleIcon from "../assets/g-logo.png";

const GoogleLoginButton = (props) => {
  const {
    onClick,
    className
  } = props;

  return (
    <div className={`${styles.container} ${className ?? ""}`} onClick={onClick}>
      <img src={GoogleIcon} className={styles.icon} />
      <span className={styles.text}>
        Login with Google
      </span>
    </div>
  )
}

export default GoogleLoginButton;