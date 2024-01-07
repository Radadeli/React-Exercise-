import { useState } from "react";
export function ToDoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const todoInput = document.getElementById('todoInput')
    if(todoInput.value.trim() !== '') {
      setTodos([...todos, todoInput.value])
      todoInput.value= ''
    }
  }
  const resetTodos = () => {
    setTodos([])
  }
  const removeTodo = (indexToRemove) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToRemove);
    setTodos(updatedTodos);
    return updatedTodos
  }
  return (
    <div>
      <h1>TodoList</h1>
      <input type="text" id="todoInput" />
      <button onClick={addTodo}> Todo </button>
      <button onClick={resetTodos}> Reset </button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}> {todo}
          <button onClick={() => removeTodo(index)}> Remove </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default ToDoList;
