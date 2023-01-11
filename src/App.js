import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import TodoList from "./components/TodoList";

import { createContext } from "react";
export const ThemeContext = createContext("null");

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1 className="title">Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
