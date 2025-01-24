import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  //할 일 목록 저장
  //원본이 되는 데이터로서 해당 데이터의 복사본을 이용할 것
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    const newSchedule = {
      id: Date.now(),
      schedule: newTodo,
    };
    setTodo([...todo, newSchedule]);
    setNewTodo("");
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
            <button type="button" onClick={(e) => console.log(e.target)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
