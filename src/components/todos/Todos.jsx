import { useState } from "react";
import trash from "../../assets/trash.png";
import "./Todos.css";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  //Set todos in the todos array when submiting the form
  const submitTodo = (e) => {
    e.preventDefault();
    if (e.target.children[0].value !== "") {
      setTodos([
        ...todos,
        { id: todos.length, todoName: e.target.children[0].value },
      ]);
      e.target.reset();
    }
  };
  //Set complete task
  const completedTask = (e) => {
    if (e.target.checked) {
      e.target.nextSibling.classList.add("completed");
    } else {
      e.target.nextSibling.classList.remove("completed");
    }
  };
  return (
    <div className="todos-wrapper">
      <h1 className="headline">Todos</h1>
      <form onSubmit={(e) => submitTodo(e)}>
        <input type="text" placeholder="Add todo..." />
        <button className="submit-btn" type="submit">
          +
        </button>
      </form>
      <ul className="todos">
        {todos.map((todo, i) => (
          <li className="todo" key={i}>
            <div className="todo-task">
              <input
                onChange={(e) => completedTask(e)}
                data-set={i}
                type="checkbox"
              />
              <h2>{todo.todoName}</h2>
            </div>
            <button
              onClick={() =>
                setTodos(todos.filter((item) => item.id !== todo.id))
              }
              type="button"
              className="delete-task"
            >
              <img src={trash} alt="delete a task" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
