import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { Search } from '../TodoSearch/index.js';
import { TodoCounter } from '../TodoCounter/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';

const AppUI = ({ todos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo }) => {
  return <section className="nes-container is-dark with-title is-centered">
    <h3 className="title">Retro TODO</h3>

    <header>
      <i className="nes-charmander" />
      <TodoCounter todos={todos} />
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </header>

    <TodoList>
      {searchedTodos.map((todo, index) =>
        <TodoItem
          key={index}
          text={todo.text}
          completed={todo.completed}
          onComplete={event => completeTodo(index, event)}
          onDelete={() => deleteTodo(index)}
        />
      )}
    </TodoList>

    <CreateTodoButton />
  </section>;
}

export { AppUI }
