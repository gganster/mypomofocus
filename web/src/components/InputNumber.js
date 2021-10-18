import React from "react";
import Button from "./Button";

import styles from "styles/components/InputNumber.module.scss";

const InputNumber = (props) => {
  const {
    label,
    value,
    onChange
  } = props;

  return (
    <div className={styles.container}>
      {label ? <label>{label}</label> : <></>}
      <div className={styles.field}>
        <input type="number" />
        <Button color="light">up</Button>
        <Button color="light">down</Button>
      </div>
    </div>
  )
}

export default InputNumber;