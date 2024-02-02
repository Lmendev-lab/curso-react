const Search = ({ searchValue, setSearchValue }) => {
  return (
    <input
      className='nes-input is-dark'
      value={searchValue}
      onChange={({ target: { value } }) =>
        setSearchValue(value)
      }
      placeholder='Search input'
    />
  )
}

export { Search };
