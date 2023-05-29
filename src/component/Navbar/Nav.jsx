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
              <Link to='/'  style={{textDecoration:'none', color:'black'}}  className="navbar-link">
                <AiOutlineHome />
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to='/About'  style={{textDecoration:'none', color:'black'}}  className="navbar-link">
                <AiOutlineInfoCircle />
               About
              </Link>
            </li>
            <li className="navbar-item">
              <Link to='/Feedback'  style={{textDecoration:'none', color:'black'}}  className="navbar-link">
                <AiOutlineComment />
                Feedback
              </Link>
            </li>
            <li className="navbar-item">
              <Link to='/'  style={{textDecoration:'none', color:'black'}}  className="navbar-link">
                <AiOutlineQuestionCircle />
                Support
              </Link>
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
