import './style.css';

export const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li>
      <label className='nes-container is-dark nes-pointer'>
        <input
          type='checkbox'
          checked={completed}
          onChange={onComplete}
          className='nes-checkbox is-dark'
        />
        <span>{text}</span>
      </label>
    </li>
  )
}
