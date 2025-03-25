import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, userType, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          VIT Help Desk
        </Link>
      </div>

      <button className="navbar-toggle" onClick={toggleMenu}>
        <MenuIcon />
      </button>

      <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link 
          to="/eligibility" 
          className={`navbar-link ${isActive('/eligibility') ? 'active' : ''}`}
        >
          Eligibility
        </Link>
        <Link 
          to="/faq" 
          className={`navbar-link ${isActive('/faq') ? 'active' : ''}`}
        >
          FAQs
        </Link>
        <Link 
          to="/contact" 
          className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
        >
          Contact
        </Link>
        {isLoggedIn ? (
          <>
            <Link
              to={userType === 'admin' ? '/admin-dashboard' : '/student-dashboard'}
              className={`navbar-link ${isActive(userType === 'admin' ? '/admin-dashboard' : '/student-dashboard') ? 'active' : ''}`}
            >
              Dashboard
            </Link>
            <button onClick={handleLogout} className="navbar-link btn-logout">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link 
              to="/login" 
              className={`navbar-link ${isActive('/login') ? 'active' : ''}`}
            >
              Login
            </Link>
            <Link to="/signup" className="navbar-link btn-get-started">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 