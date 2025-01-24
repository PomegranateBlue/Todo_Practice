import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  //할 일 목록 저장
  //원본이 되는 데이터로서 해당 데이터의 복사본을 이용할 것
  const [newTodo, setNewTodo] = useState("");
  //할 일은 newTodo를 통해 상태를 확인하고 id,schedule 필드로 이루어진 데이터를 추가한다.
  window.onload = () => {
    const loadTodos = localStorage.getItem("savedTodos");
    if (loadTodos) {
      setTodo(JSON.parse(loadTodos));
    }
  };
  const addTodo = (e) => {
    e.preventDefault();
    const newSchedule = {
      id: Date.now(),
      schedule: newTodo,
    };
    //newSchedule이라는 객체는 새로 추가되는 항목의 상태인 newTodo 상태를 받는다
    const updateTodo = [...todo, newSchedule];
    setTodo(updateTodo);
    localStorage.setItem("savedTodos", JSON.stringify(updateTodo));
    setNewTodo("");
  };
  const deleteTodo = (id) => {
    const deletedTodo = todo.filter((item) => item.id !== id);
    setTodo(deletedTodo);
    localStorage.setItem("savedTodos", JSON.stringify(deletedTodo));
  };
  const handleInputValue = (e) => {
    setNewTodo(e.target.value);
  };
  return (
    <div>
      <h1>TODO</h1>
      <form className="formContainer" onSubmit={addTodo}>
        <fieldset className="userInputField">
          <input
            type="text"
            placeholder="오늘 스케줄은?"
            value={newTodo}
            onChange={handleInputValue}
            required
          ></input>
          <button type="submit">추가</button>
        </fieldset>
      </form>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.schedule}
            <button type="button" onClick={() => deleteTodo(item.id)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
