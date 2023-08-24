import { TodoCounter } from './components/TodoCounter.js';
import { TodoList } from './components/TodoList.js';
import { TodoItem } from './components/TodoItem.js';
import { Search } from './components/Search.js';
import { CreateTodoButton } from './components/CreateTodoButton.js';

import './App.css';
import React from 'react';

const todos = [
  { text: 'a', completed: true }, 
  { text: 'b', completed: false }, 
  { text: 'c', completed: true }, 
  { text: 'd', completed: true }, 
]

export const App = () =>
  <>
    <TodoCounter completed={4} total={5}/>
    <Search />
    
    <TodoList>
      {todos.map(todo =>
        <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
        />)}
    </TodoList>

    <CreateTodoButton />
  </>
