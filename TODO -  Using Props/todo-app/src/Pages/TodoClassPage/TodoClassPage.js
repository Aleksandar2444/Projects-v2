import React, { Component } from "react";

class TodoClassPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      todoInputValue: "",
    };
  }

  addTodo() {
    this.setState((prevState) => {
      if (this.state.todoInputValue.length < 1) {
        return prevState;
      }
      return {
        todos: [...prevState.todos, this.state.todoInputValue],
        //Important line (two way binding) is a must
        todoInputValue: "",
      };
    });
  }

  render() {
    return (
      <section className="page">
        <div className="page__heading">
          <h2>TODOS</h2>
        </div>
        <div>
          <form>
            <label htmlFor="todo_input">Add a Todo</label>
            <input
              //Important line (two way binding) is a must
              value={this.state.todoInputValue}
              type="text"
              id="todo_input"
              onChange={(e) =>
                this.setState(
                  (prevState) => (prevState.todoInputValue = e.target.value)
                )
              }
            />
          </form>
          <button
            className="Button"
            type="button"
            onClick={(e) => this.addTodo()}
          >
            Add Todo
          </button>
        </div>
        <ol>
          {this.state.todos.map((todo, i) => (
            <li key={todo + i}>{todo}</li>
          ))}
        </ol>
      </section>
    );
  }
}

export default TodoClassPage;
