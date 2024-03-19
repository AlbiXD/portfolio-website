import { Link } from "react-router-dom";

function NavBar() {

  return (
    <nav className="navBar">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/">
        <img
          src="https://i.imgur.com/4FQDn6f.png"
          className="darkModeImage"
          id="moonImage"
        />
      </Link>
    </nav>
  );
}

export default NavBar;
