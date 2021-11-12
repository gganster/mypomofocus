import React, {useState} from "react";
import Hooks from "hooks";

import styles from "styles/pages/components/Task_Item.module.scss";

const Item = (props) => {
  const {
    doc,
    onEdit,
    isEdit,
  } = props;
  const {deleteDoc, updateDoc} = Hooks.useTasks(false);

  return (
    <>
      {!isEdit ? 
      <div className={styles.container}>
        <div className={styles.left}>
          {doc.title}
        </div>
        <div className={styles.right}>

        </div>
      </div>
      :
      <>
      </>
      }
    </>
  )
}

export default Item;