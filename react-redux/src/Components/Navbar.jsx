import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        {/* Here the link should not be in self closing tag */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user/username">User</Link>
        <Link to="/users">Users</Link>
        <Link to="*">Page not found</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
