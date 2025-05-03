import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';


export default function Todo() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false }
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addnewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let DeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let uppercaseAll = () => {
    setTodos((prevTasks) =>
      prevTasks.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };

  // let uppercaseOne = (id) => {
  //   setTodos((prevTasks) =>
  //     prevTasks.map((todo) => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           task: todo.task.toUpperCase(),
  //         };
  //       } else {
  //         return todo;
  //       }
  //     })
  //   );
  // };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add a task"
        onChange={updateTodoValue}
        value={newTodo}
      />
      <button onClick={addnewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <h4>Tasks to do</h4>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
              }}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => DeleteTodo(todo.id)}>Delete</button>
            &nbsp;&nbsp;
            <button onClick={() => markAsDone(todo.id)}>
              {todo.isDone ? "Undo" : "Mark as Done"}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={uppercaseAll}>Uppercase All</button>
    </div>
  );
}
