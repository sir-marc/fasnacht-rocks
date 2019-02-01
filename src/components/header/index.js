import React, { useState } from 'react';
import './index.scss';

const Header = ({ setFilter }) => {
  const [searchValue, setSearchValue] = useState('')

  const onSubmit = e => {
    e.preventDefault();
    setFilter({ location: searchValue })
  }

  return (
    <div className="header">
      <form className="search" onSubmit={onSubmit}>
        <input type="text" placeholder="Wo?" onChange={e => setSearchValue(e.target.value)}/>
        <button type="submit"></button>
      </form>
    </div>
  )
}

export default Header;
