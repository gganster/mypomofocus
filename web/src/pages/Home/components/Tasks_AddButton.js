import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import CPNT from "../../../components";

import styles from "../../../styles/pages/components/Tasks_AddButton.module.scss";

const AddButon = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      {open ? 
        <div className={styles.addTaskForm}>
          <div className={styles.addTaskFormBody}>
            <input type="text" placeholder="What are you working on ?" />
            <CPNT.InputNumber label="Est Pomodoros" />
          </div>
          <div className={styles.addTaskFormFooter}>
            <CPNT.Button color="transparent">Cancel</CPNT.Button>
            <CPNT.Button color="grey">Save</CPNT.Button>
          </div>
        </div>
      :
        <div className={styles.idleContainer} onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faPlusCircle} />
          <h3>Add Task</h3>
        </div>
      }
    </div>
  )
}

export default AddButon;