const TodoCounter = ({ todos }) => {
  const completedTodos = todos.filter(todo => todo.completed);
  const completedCount = completedTodos.length;
  const total = todos.length;

  const text = {
    default: `Has completado ${completedCount} de ${total} TODOs`,
    allDone: `No hay TODOs que hacer 😎`,
  }

  return (
    <h1>{completedCount < total ? text.default : text.allDone}</h1>
  );
};

export { TodoCounter };
