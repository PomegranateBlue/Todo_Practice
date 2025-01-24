import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  //할 일 목록 저장
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, { id: Date.now(), schedule: newTodo }]);
    setNewTodo("");
  };

  const handleInputValue = (e) => {
    setNewTodo(e.target.value);
  };
  return (
    <div>
      <h1>TODO</h1>
      <form className="formContainer" onSubmit={addTodo}>
        <div className="userInputField">
          <input
            type="text"
            placeholder="오늘 스케줄은?"
            value={newTodo}
            onChange={handleInputValue}
            required
          ></input>
          <button type="submit">추가</button>
        </div>
      </form>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>{item.schedule}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
