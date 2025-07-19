import React, { useState } from 'react';
import './NestedDropdown.css'; // Import the CSS file (see below)

const DropdownItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="dropdown-item">
      <button
        onClick={item.children ? toggleOpen : null}
        aria-expanded={item.children ? isOpen : undefined}
        aria-haspopup={!!item.children}
      >
        {item.label}
        {item.children && <span className="arrow">{isOpen ? '▼' : '▶'}</span>}
      </button>
      {item.children && isOpen && (
        <ul className="dropdown-submenu">
          {item.children.map((child, index) => (
            <DropdownItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const NestedDropdown = ({ items, title = 'Menu' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nested-dropdown">
      <button
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-haspopup="true"
      >
        {title} {isMenuOpen ? '▼' : '▶'}
      </button>
      {isMenuOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <DropdownItem key={index} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default NestedDropdown;
