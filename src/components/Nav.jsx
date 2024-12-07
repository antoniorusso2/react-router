import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <header>
      <nav className="container">
        <ul className="links row">
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
    </header>
  );
}
