import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
function App() {
  const [todo, setTodo] = useState([]);
  window.onload = () => {
    const loadTodos = localStorage.getItem("savedTodos");
    if (loadTodos) {
      setTodo(JSON.parse(loadTodos));
    }
  };

  const deleteTodo = (id) => {
    const deletedTodo = todo.filter((item) => item.id !== id);
    setTodo(deletedTodo);
    localStorage.setItem("savedTodos", JSON.stringify(deletedTodo));
  };

  return (
    <div>
      <h1>TODO</h1>
      <TodoForm todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
