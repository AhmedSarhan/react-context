import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TodosSchema } from "./todos-schema";
import styles from "./todos.module.css";

export const TodoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      dueDate: "",
      priority: "low",
    },
    resolver: yupResolver(TodosSchema),
  });

  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          {...register("title")}
          className={styles.formControl}
          placeholder="Enter Title"
          error={(!!errors.title).toString()}
        />
        {!!errors.title && (
          <span className={styles.error}>{errors.title.message}</span>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">Description</label>
        <textarea
          {...register("description")}
          className={styles.formControl}
          error={(!!errors.description).toString()}
          rows={5}
          placeholder="Enter Description"
        ></textarea>
        {!!errors.description && (
          <span className={styles.error}>{errors.description.message}</span>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          {...register("dueDate")}
          className={styles.formControl}
          error={(!!errors.dueDate).toString()}
          min={new Date().toISOString().split("T")[0]}
        />
        {!!errors.dueDate && (
          <span className={styles.error}>{errors.dueDate.message}</span>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="priority">Priority</label>
        <select
          {...register("priority")}
          className={styles.formControl}
          error={(!!errors.priority).toString()}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        {!!errors.priority && (
          <span className={styles.error}>{errors.priority.message}</span>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
};
