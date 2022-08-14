import { useState } from "react";

const TodoHookPage = (props) => {
  const [number, setNumber] = useState(0);
  const [todoInputValue, setTodoInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const add = () => {
    setNumber((prevNumber) => prevNumber + 1);
    // setNumber(number + 1);
  };
  const remove = () => {
    setNumber((prevNumber) => {
      if (prevNumber === 0) return prevNumber;
      return prevNumber - 1;
    });
  };

  const addTodo = () => {
    if (todoInputValue.length < 1) return;
    setTodos((prevTodos) => [...prevTodos, todoInputValue]);
    setTodoInputValue("");
  };

  return (
    <section className="page">
      <div className="page__heading">
        <h2>TODOS Hooks Example</h2>
      </div>
      <div>
        <h2>{number}</h2>
        <button className="Button" onClick={add}>
          Add
        </button>
        <button
          className="Button"
          disabled={number === 0}
          onClick={() => remove()}
        >
          Remove
        </button>
      </div>
      <div>
        <label htmlFor="todo_input">Add Todo</label>
        <input
          type="text"
          id="todo_input"
          value={todoInputValue}
          onChange={(e) => setTodoInputValue(e.target.value)}
        />
        <button className="Button" type="button" onClick={addTodo}>
          Add Todo
        </button>
      </div>
      <ol>
        {todos.map((todo, i) => (
          <li key={todo + i}>{todo}</li>
        ))}
      </ol>
    </section>
  );
};

export default TodoHookPage;
