import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { GiHamburgerMenu } from 'react-icons/gi';

function NavBar() {
  function toggleMenu() {
    let menu = document.querySelector('.navbar__menu');
    menu.classList.toggle('active');
  }

  return (
    <nav id="navbar">
      <div className="navbar__logo">
        <Link to="/">light10</Link>
      </div>

      <ul className="navbar__menu">
        <li className="navbar__menu__item">
          <Link to="/message">답장</Link>
        </li>
        <li className="navbar__menu__item">
          <Link to="/message">파티</Link>
        </li>
        <li className="navbar__menu__item">
          <Link to="/message">호텔</Link>
        </li>
        <li className="navbar__menu__item">
          <Link to="/message">일정</Link>
        </li>
        <li className="navbar__menu__item">
          <Link to="/message">인보이스</Link>
        </li>
        <li className="navbar__menu__item">
          <Link to="/Login">로그인</Link>
        </li>
      </ul>

      <GiHamburgerMenu className="nav__toggle" onClick={toggleMenu} />
    </nav>
  );
}

export default NavBar;
