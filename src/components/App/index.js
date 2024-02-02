import { useState } from 'react';

import { AppUI } from './AppUI.js';
import { useLocalStorage } from '../../hooks/localStorage.js';

import './index.css';

/* const defaultTodos = [
  { text: 'a', completed: true },
  { text: 'b', completed: false },
  { text: 'c', completed: false },
  { text: 'd', completed: true },
] 
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
*/

export const App = () => {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('')

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();

    return todoText.includes(searchText);
  }
  );

  const completeTodo = (index, { target }) => {
    let newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;

    saveTodos(newTodos);

    target.checked = !target.checked;
  }

  const deleteTodo = index => {
    saveTodos(todos => todos.filter((_, i) => i !== index));
  }

  return (
    <AppUI
      todos={todos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}
