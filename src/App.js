import { useState } from 'react';
import { TodoCounter } from './components/TodoCounter.js';
import { TodoList } from './components/TodoList.js';
import { TodoItem } from './components/TodoItem.js';
import { Search } from './components/Search.js';
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
