import React from "react";
import styles from "./todos.module.css";
export const TodoCard = () => {
  return (
    <div className={styles.todoCard}>
      <div className={styles.todoHeader}>
        <input type="checkbox" />
        <h3>Todo Title</h3>
      </div>
      <p>Todo Description</p>
      <p>Due Date: 2022-12-12</p>
      <p>Priority: Low</p>
      <button className={styles.deleteBtn}>Delete</button>
    </div>
  );
};
