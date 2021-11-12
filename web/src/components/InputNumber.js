import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/components/InputNumber.module.scss";

const InputNumber = (props) => {
  const {
    label,
    value,
    onChange,
    min,
    max
  } = props;

  const _onChangeInput = (e) => {
    let num = parseInt(e.target.value);
    
    if (typeof(max) !== "undefined" && num > max) return;
    if (typeof(min) !== "undefined" && num < min) return;
    onChange(parseInt(num))
  }
  const _onInputBlur = () => {
    if (!value && value !== 0)
      onChange(1);
  }
  const _onClickUp = () => {
    if (typeof(max) !== "undefined") {
      if (value < max)
        onChange(value + 1)
    } else
      onChange(value + 1)
  }
  const _onClickDown = () => {
    if (typeof(min) !== "undefined") {
      if (value > min)
        onChange(value - 1)
    } else
      onChange(value - 1);
  }

  return (
    <div className={styles.container}>
      {label ? <label>{label}</label> : <></>}
      <div className={styles.field}>
        <input type="number" value={value} onChange={_onChangeInput}
                                           onBlur={_onInputBlur} />
        <Button color="light"><FontAwesomeIcon icon={faArrowUp} onClick={_onClickUp}/></Button>
        <Button color="light"><FontAwesomeIcon icon={faArrowDown} onClick={_onClickDown} /></Button>
      </div>
    </div>
  )
}

export default InputNumber;