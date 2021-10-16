import React from "react";
import styles from "../styles/components/Card.module.scss";

const Card = (props) => {
  const {
    children,
    className
  } = props;

  return (
    <div className={`${styles.container} ${className ?? ''}`}>
      {children && children}
    </div>
  )
}

export default Card;