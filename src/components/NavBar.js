import React, { useState } from 'react';
import '../styles/Navbar.css';

const NavBar = ({ onSearch }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive); // Toggle search active state
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); // Trigger search on input change
  };

  return (
    <nav className="navbar">
      <div className="logo">EventSpot</div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className={isSearchActive ? 'active' : ''} // Add a class for styling when active
        />
        <button onClick={handleSearchClick}>
          {isSearchActive ? 'Close' : 'Search'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;