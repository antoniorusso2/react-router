import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <header>
      <nav className="container">
        <ul className="links">
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/about">
            About Us
          </NavLink>
          <NavLink className="link" to="posts">
            Posts
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
