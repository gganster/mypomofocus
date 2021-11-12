import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import CPNT from "../../../components";
import Hooks from "hooks";

import styles from "../../../styles/pages/components/Tasks_AddButton.module.scss";

const AddButon = () => {
  const {createDoc} = Hooks.useTasks(false);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [est, setEst] = useState(1);

  const _onSubmit = async () => {
    if (!title) return;

    try {
      await createDoc({
        title,
        pomodoros: est,
        createdAt: new Date()
      })
      setTitle("");
      setEst(1);
    } catch (e) {console.error(e.message)}
  }

  return (
    <div className={styles.container}>
      {open ? 
        <div className={styles.addTaskForm}>
          <div className={styles.addTaskFormBody}>
            <input type="text" placeholder="What are you working on ?"
                               value={title} onChange={e => setTitle(e.target.value)} />
            <CPNT.InputNumber label="Est Pomodoros"
                              value={est}
                              onChange={setEst}
                              min={1} />
            <CPNT.Button color="grey" style={{marginLeft: 0}}>Add Note</CPNT.Button>
            <CPNT.Button color="grey">Add Project</CPNT.Button>
          </div>
          <div className={styles.addTaskFormFooter}>
            <CPNT.Button color="transparent" onClick={() => setOpen(false)}>Cancel</CPNT.Button>
            <CPNT.Button color="grey" onClick={_onSubmit}>Save</CPNT.Button>
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