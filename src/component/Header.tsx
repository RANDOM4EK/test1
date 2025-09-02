import React from 'react';
import useTheme from '../hooks/useTheme';

function Header() {
  const { isLight, toggleTheme } = useTheme();

  return (
    <div>
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#languages">Languages</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>
      <button onClick={toggleTheme}>
        Переключить на {isLight ? "тёмную" : "светлую"} тему
      </button>
    </div>
  );
}


export default React.memo(Header);
