const TodoList = ({ todo }, deleteTodo) => {
  return (
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
  );
};

export default TodoList;
