import { TodoForm } from "./components/todos/todo-form";
import { TodosListing } from "./components/todos/todos-listing";

function App() {
  return (
    <div className="container">
      <h1>Todos App</h1>
      <TodoForm />
      <TodosListing />
    </div>
  );
}

export default App;
