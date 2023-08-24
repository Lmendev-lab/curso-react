const TodoItem = ({ text }) => {
  return(
    <li>
      <span>[  ]</span>
      <p>{text}</p>
      <span>X</span>
    </li>
  )
}

export { TodoItem };
