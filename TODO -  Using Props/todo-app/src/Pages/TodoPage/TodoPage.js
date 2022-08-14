import { useState } from "react";
import TodoList from "../../Components/TodoList/TodoList";
import { v4 as uuid } from "uuid";
import TodoInput from "../../Components/TodoInput/TodoInput";

const starterTodoData = [
  {
    todoText: "Write an example todo",
    isFinished: false,
    id: uuid(),
  },
  {
    todoText: "Create a finished todo",
    isFinished: true,
    id: uuid(),
  },
];

const TodoPage = (props) => {
  const [todos, setTodos] = useState(starterTodoData);

  //For finishing or deliting a todo
  const onClickTodo = (todoId) => {
    const foundTodo = todos.find((todo) => todo.id === todoId);

    //Delete todo
    if (foundTodo.isFinished) {
      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== foundTodo.id)
      );
      //If todo has same id with founded todo change his property from false to true and line-through it otherwise return todo
      //Finish todo
    } else {
      setTodos((prevTodos) => {
        const updatedTodos = prevTodos.map((todo) => {
          if (todo.id === foundTodo.id) {
            todo.isFinished = true;
            return todo;
          } else {
            return todo;
          }
        });
        return updatedTodos;
      });
    }
  };

  const onAddTodo = (todoText) => {
    const newTodo = {
      todoText,
      isFinished: false,
      id: uuid(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <section className="page">
      <div className="page__heading">
        <h2>TODOS Clear Page</h2>
      </div>
      <div style={{ display: "flex" }}>
        <TodoInput onAddTodo={onAddTodo} />
        <TodoList todos={todos} onClickTodo={onClickTodo} />
      </div>
    </section>
  );
};

export default TodoPage;
