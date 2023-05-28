import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineComment, AiOutlineQuestionCircle } from 'react-icons/ai';
import './Nav.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Logo</div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>

          <ul className="navbar-items">
            <li className="navbar-item">
              <a href="#home" className="navbar-link">
                <AiOutlineHome />
                <Link to='/'  style={{textDecoration:'none', color:'black'}} >Home</Link>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link">
                <AiOutlineInfoCircle />
                <Link to='/'  style={{textDecoration:'none', color:'black'}} >About</Link>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#feedback" className="navbar-link">
                <AiOutlineComment />
                <Link to='/' style={{textDecoration:'none', color:'black'}}>Feedback</Link>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#support" className="navbar-link">
                <AiOutlineQuestionCircle />
                <Link to='/' style={{textDecoration:'none', color:'black'}}>Support</Link>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
