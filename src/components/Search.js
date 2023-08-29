const Search = ({searchValue, setSearchValue}) => {
  return(
    <input
      value={searchValue}
      onChange={({target: { value }}) => 
        setSearchValue(value)
      }
    />
  )
}

export { Search };
