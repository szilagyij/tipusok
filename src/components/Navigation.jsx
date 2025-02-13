import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">Termékek</Link>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Termékek</Link>
          <Link to="/ujtipus" onClick={() => setMenuOpen(false)}>Új típus</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;