import { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

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
