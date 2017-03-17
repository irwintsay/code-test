import React from 'react';
import './NavHeader.css';
import logo from '../../assets/img/logo.svg';
import hamburger from '../../assets/img/hamburger.png';

const NavHeader = props => (
  <header className="NavHeader">
    <img src={ logo } alt="Logo" />
    <img className="right" src={ hamburger } alt="Menu" />
    <span className="login right">LOGIN</span>
    <span className="right">212.555.5555</span>
  </header>
);

export default NavHeader;