import { useState } from "react";
import "./TodoList.css";
export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const todoList = todos.map((todo) => <li key={todo}>{todo}</li>);
  const onAdd = (values) => {
    const newList = todos;
    newList.push(values);
    setTodos(newList);
  };
  return (
    <>
      <div>
        <ul>
          {todoList}
          <li>
            <form onSubmit={(e) => onAdd(e)}>
              <input type="text" />
              <input type="submit" />
            </form>
          </li>
        </ul>
      </div>
    </>
  );
};
