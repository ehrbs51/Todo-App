import { useState } from "react";

function Todo({ todo, setTodoList }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(todo.content);

  const toggleDone = () => {
    setTodoList((prev) =>
      prev.map((el) =>
        el.id === todo.id ? { ...el, done: !el.done } : el
      )
    );
  };

  return (
    <li>
      <input type="checkbox" checked={todo.done} onChange={toggleDone} />
      {isEditing ? (
        <>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={() => {
              setTodoList((prev) =>
                prev.map((el) =>
                  el.id === todo.id ? { ...el, content: inputValue } : el
                )
              );
              setIsEditing(false);
            }}
          >
            저장
          </button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
            {todo.content}
          </span>
          <button onClick={() => setIsEditing(true)}>수정</button>
        </>
      )}
      <button
        onClick={() => {
          setTodoList((prev) => prev.filter((el) => el.id !== todo.id));
        }}
      >
        삭제
      </button>
    </li>
  );
}

function TodoList({ todoList, setTodoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
      ))}
    </ul>
  );
}

export default TodoList;
