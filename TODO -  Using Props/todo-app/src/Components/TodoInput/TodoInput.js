import React, { useState } from "react";
import Button from "../Button/Button";
import "./TodoInput.css";

const TodoInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onInputSubmit = () => {
    if (inputValue.length < 1) {
      setErrorMsg("Todo field must not be empty");
      return;
    }
    props.onAddTodo(inputValue);
    setInputValue("");
    setErrorMsg("");
  };

  return (
    <div className="Input">
      <h3>Add Todo</h3>
      <div className="Input__controls">
        <input
          type="text"
          value={inputValue}
          placeholder="Enter todo text here"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>
          <small>{errorMsg}</small>
        </p>
      </div>
      <Button
        buttonText="ADD"
        style={{ width: "200px", alignSelf: "center" }}
        onButtonClick={onInputSubmit}
      />
    </div>
  );
};

export default TodoInput;
