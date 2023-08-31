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

  const searchedTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  const onCompleteTodo = (index, { target }) => {
    let newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;

    setTodos(newTodos);

    target.checked = !target.checked;
  }

  const onDeleteTodo = index => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);

    setTodos(newTodos);
  }

  return (
    <section className="nes-container is-dark with-title is-centered">
      <h3 className="title">Retro TODO</h3>

      <header>
        <i className="nes-charmander" />
        <TodoCounter completed={completedTodos} total={TotalTodos} />
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </header>

      <TodoList>
        {searchedTodos.map((todo, index) => {
          return (<TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={event => onCompleteTodo(index, event)}
            onDelete={() => onDeleteTodo(index)}
          />)
        })}
      </TodoList>

      <CreateTodoButton />
    </section>
  )
}
