import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../../img/YT.png';
import MobileLogo from '../../img/whitelogo.png';
import './header.css';

function Header({onSearchChange}) {
    return (
      <div className="main-nav">
        <div className="main-nav__logo">
            <img id="desktop__logo" src={logo} alt="youtube logo"/>
            <img id="mobile__logo" src={MobileLogo} alt="youtube logo"/>
        </div>
        <div className="main-nav__item">
            <input type="text" onChange={onSearchChange}></input>
            <button type="button">&#9906;</button>
        </div>
      </div>
    );
  }
  
  export default Header;
  