import * as React from "react";
import { render } from "react-dom";
// Import components
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
// Import interfaces
import { TodoInterface } from "./interface";
import "./style.css";
const App: React.FC = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);
  // Creating new todo item
  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.push(todo);
    setTodos(newTodosState);
  }
  // Update existing todo item
  function handleTodoUpdate(
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    const newTodosState: TodoInterface[] = [...todos];

    newTodosState.find((todo: TodoInterface) => todo.id === id)!.name =
      event.target.value;

    setTodos(newTodosState);
  }
  // Remove existing todo item
  function handleTodoRemove(id: string) {
    const newTodosState: TodoInterface[] = todos.filter(
      (todo: TodoInterface) => todo.id !== id
    );

    setTodos(newTodosState);
  }
  // Check existing todo item as completed
  function handleTodoComplete(id: string) {
    const newTodosState: TodoInterface[] = [...todos];
    // Find the correct todo item and update its ‘isCompleted’ key
    newTodosState.find(
      (todo: TodoInterface) => todo.id === id
    )!.isCompleted = !newTodosState.find(
      (todo: TodoInterface) => todo.id === id
    )!.isCompleted;
    setTodos(newTodosState);
  }
  return (
    <div className="App">
      <React.Fragment>
        <h2>My ToDo APP</h2>
        <ToDoForm todos={todos} handleTodoCreate={handleTodoCreate} />
        <ToDoList
          todos={todos}
          handleTodoUpdate={handleTodoUpdate}
          handleTodoRemove={handleTodoRemove}
          handleTodoComplete={handleTodoComplete}
        />
      </React.Fragment>
    </div>
  );
};
export default App;
