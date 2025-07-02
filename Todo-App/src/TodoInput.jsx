import { useState } from "react";

function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const newTodo = {
            id: Number(new Date()),
            content: inputValue,
            done: false,
          };
          setTodoList([...todoList, newTodo]);
          setInputValue("");
        }}
      >
        추가하기
      </button>
    </>
  );
}

export default TodoInput;
