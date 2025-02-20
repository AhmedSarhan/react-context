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

/* 

1. Create a new Provider / use the cart provider
2. save the state in it  
3. update the wishlisted state of a product
4. reflect the correct state on the heart icon
5. prevent duplicate additions / remove or add 
6. Extra: use the useReducer (Redux Pattern)

*/
