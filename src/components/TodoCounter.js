const TodoCounter = ({ completed, total }) => {
  const text = {
    default: `Has completado ${completed} de ${total} TODOs`,
    allDone: `No hay TODOs que hacer 😎`,
  }

  return (
    <h1>{completed < total ? text.default : text.allDone}</h1>
  );
};

export { TodoCounter };
