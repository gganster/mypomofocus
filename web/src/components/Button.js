import React from "react";
import * as PT from "prop-types";

import styles from 'styles/components/Button.module.scss';

const Button = (props) => {
  const {
    color,
    size,
    onClick,
    children,
    className,
    containerStyle,
    textStyle
  } = props;

  return (
    <span className={`${styles.container} ${
                      color === "light" ? styles.light :
                      color === "grey" ? styles.grey :
                      color === "transparent" ? styles.transparent :
                      color === "opacity" ? styles.opacity : styles.grey
                    } ${
                      size === "sm" ? styles.sm :
                      size === "md" ? styles.md :
                      size === "lg" ? styles.mg : styles.md
                    } ${className ?? ""}`}
        style={containerStyle}
        onClick={onClick}>
          {children}
    </span>
  )
}

Button.defaultProps = {
  color: "grey",
  size: "md"
}
Button.propTypes = {
  color: PT.oneOf(["light", "grey", "transparent", "opacity"]),
  size: PT.oneOf(["sm", "md", "lg"]),
  onClick: PT.func.isRequired,
}

export default Button;