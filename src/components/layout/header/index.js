import React from 'react';
import './index.scss';

const Header = ({ children, _ref }) => {
  return (
    <div className="header" ref={_ref} >
      {children}
    </div>
  )
}

export default Header;
