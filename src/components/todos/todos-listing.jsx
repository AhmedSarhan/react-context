import React from "react";
import styles from "./todos.module.css";
import { TodoCard } from "./todo-card";

export const TodosListing = () => {
  return (
    <section className={styles.sectionContainer}>
      <h3>Todos</h3>
      <div className={styles.todosListing}>
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </section>
  );
};
