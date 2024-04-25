import { useState } from "react";
import "./TodoList.css";
export const TodoList = () => {
  const [todos, setTodos] = useState(["abc"]);
  const [todo, setTodo] = useState("add your todo here!");
  const todoList = todos.map((todo) => (
    <li key={todo}>
      <input type="checkbox" />
      <h4>{todo}</h4>
    </li>
  ));
  const onAdd = (e) => {
    e.preventDefault();
    if (e.target.item.value && e.target.item.value.trim()) {
      const newList = todos;
      newList.push(e.target.item.value);
      setTodos(newList);
      setTodo("");
    } else {
      setTodo("");
    }
  };
  return (
    <>
      <div className="todoRoot">
        <ul>
          {todoList}
          <li>
            <form onSubmit={onAdd}>
              <input
                type="text"
                name="item"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
              <input type="submit" value="Add todo" />
            </form>
          </li>
        </ul>
      </div>
    </>
  );
};
