import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <ul className="links">
            <NavLink className="nav_link" to="/">
              Home
            </NavLink>
            <NavLink className="nav_link" to="/about">
              About Us
            </NavLink>
            <NavLink className="nav_link" to="posts">
              Posts
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
