import React, {useState, useEffect} from "react";

import styles from "../../styles/pages/Home_Timer.module.scss";

const Timer = () => {
  const [timerSelected, setTimerSelected] = useState("Pomodoro");

  const _onTimerSelectionClick = (timer) => {
    setTimerSelected(timer);
  }

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <div className={`${styles.timerSelection} ${timerSelected === "Pomodoro" ? styles.selected : {}}`}
             onClick={() => _onTimerSelectionClick("Pomodoro")}>
          Pomodoro
        </div>
        <div className={`${styles.timerSelection} ${timerSelected === "Short Break" ? styles.selected : {}}`}
             onClick={() => _onTimerSelectionClick("Short Break")}>
          Short Break
        </div>
        <div className={`${styles.timerSelection} ${timerSelected === "Long Break" ? styles.selected : {}}`}
             onClick={() => _onTimerSelectionClick("Long Break")}>
          Long Break
        </div>
      </div>
      <span className={styles.timer}>
        15:00
      </span>
      <span className={styles.button}>
        START
      </span>
    </div>
  )
}

export default Timer;