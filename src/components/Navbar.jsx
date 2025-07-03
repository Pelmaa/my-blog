

import { Link } from "react-router-dom";
import "../App.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">My Blog</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </div>
    </nav>
    
  );
};

export default Navbar;
