import React from "react";

const Search = () => {
  const [searchValue, setSearchValue] = React.useState('');

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
