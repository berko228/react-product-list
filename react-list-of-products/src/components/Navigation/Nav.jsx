import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <a 
          href="#apple" 
          className="nav__link is-active"
        >
            Apple
        </a>
      </li> 
      <li className="nav__item">
        <a 
          href="#samsung" 
          className="nav__link"
        >
            Samsung
        </a>
      </li>
      <li className="nav__item">
        <a 
          href="#smartphonesandphones" 
          className="nav__link"
        >
          Смартфони та телефони
        </a>
      </li>
      <li className="nav__item">
        <a 
          href="#computers" 
          className="nav__link"
          data-qa="hover"
        >
            Ноутбуки та комп'ютери
        </a>
      </li>
      <li className="nav__item"> 
        <a 
          href="#gadgetes" 
          className="nav__link"
        >
            Гаджети
        </a>
      </li>
      <li className="nav__item">
        <a 
          href="#tablets" 
          className="nav__link"
        >
            Планшети
        </a>
      </li>
      <li className="nav__item">
        <a 
          href="#photo" 
          className="nav__link"
        >
            Фото
        </a>
      </li>
      <li className="nav__item">
        <a 
          href="#video" 
          className="nav__link"
        >
            Відео
        </a>
      </li>
    </ul>
  </nav>
  )
}

export default Nav;
