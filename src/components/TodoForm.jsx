import { useState } from "react";
const TodoForm = ({ todo, setTodo }) => {
  const [newTodo, setNewTodo] = useState("");
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
  const handleInputValue = (e) => {
    setNewTodo(e.target.value);
  };
  return (
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
  );
};
export default TodoForm;
