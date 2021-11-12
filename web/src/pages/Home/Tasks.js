import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Hooks from "hooks";

import AddButton from "./components/Tasks_AddButton";
import TaskItem from "./components/Tasks_Item";

import styles from "../../styles/pages/Home_Tasks.module.scss";

const Tasks = () => {
  const {tasks} = Hooks.useTasks();

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <h3>Tasks</h3>
        <FontAwesomeIcon className={styles.icon}
                         size="lg"
                         icon={faEllipsisV} />
      </div>
      <div className={styles.tasks}>
        {tasks && tasks.map(doc => (
          <TaskItem key={doc.uid} doc={doc} />
        ))}
      </div>
      <AddButton />
    </div>
  )
}

export default Tasks;