import React from 'react';
import './NavHeader.css';
import logo from '../../assets/img/logo.svg';

const NavHeader = props => (
  <header className="NavHeader">
    <img src={ logo } alt="Logo" />
    <span className="right">LOGIN</span>
    <span className="right">212.555.5555</span>
  </header>
);

export default NavHeader;