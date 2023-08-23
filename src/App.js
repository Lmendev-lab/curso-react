import { TodoCounter } from './components/TodoCounter.js';
import { TodoList } from './components/TodoList.js';
import { TodoItem } from './components/TodoItem.js';
import { TodoSearch } from './components/TodoSearch.js';
import { CreateTodoButton } from './components/CreateTodoButton.js';

import './App.css';

export const App = () =>
  <div className="App">
    <TodoCounter />
    <TodoSearch />
    
    <TodoList>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodoList>

    <CreateTodoButton />
  </div>
