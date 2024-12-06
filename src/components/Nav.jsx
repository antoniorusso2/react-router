import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="container">
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="posts">Posts</NavLink>
        </ul>
      </nav>
    </div>
  );
}
