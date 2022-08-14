import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div className="TodoList">
      <h3>List Title</h3>
      {/* We add ? if we dont send props.todos because we get undefined = error */}
      {/* {!props.todos?.length && <div>No Todos</div>} */}
      {props.todos.length <= 1 && <div>No Todos</div>}
      {props.todos.length > 0 && (
        <ul>
          {props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onClickTodo={props.onClickTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
