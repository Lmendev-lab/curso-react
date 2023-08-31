import { useState } from 'react';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { Search } from './components/Search.js';
import { TodoCounter } from './components/TodoCounter.js';
import { CreateTodoButton } from './components/CreateTodoButton.js';

import './App.css';

const defaultTodos = [
  { text: 'a', completed: true }, 
  { text: 'b', completed: false }, 
  { text: 'c', completed: false }, 
  { text: 'd', completed: true }, 
]

export const App = () => {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const TotalTodos = todos.length;

  return (
      <header>
      <i className="nes-charmander" />
        <TodoCounter completed={completedTodos} total={TotalTodos} />
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      </header>
      
      <TodoList>
        {todos.map(todo =>
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />)}
      </TodoList>

      <CreateTodoButton />
    </section>
  )
}
