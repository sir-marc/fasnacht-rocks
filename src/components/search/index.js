import React, { useState, useEffect } from 'react';
import './index.scss';

const Search = ({ setFilter, filterValue }) => {
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    setSearchValue(filterValue || '')
  }, [ filterValue ])

  const onSubmit = e => {
    e.preventDefault();
    setFilter({ location: searchValue })
  }

  return (
    <form className="search" onSubmit={onSubmit}>
      <input type="text" placeholder="Wo?" onChange={e => setSearchValue(e.target.value)} value={searchValue} />
      <button type="submit"></button>
    </form>
  )
}

export default Search;
