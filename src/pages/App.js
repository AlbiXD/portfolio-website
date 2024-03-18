import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "./Home"; // Adjust the path as necessary

function App() {
  return (
    <Router>
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
          />
        </Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Define additional routes for Projects, Contact, etc., as needed */}
      </Routes>
    </Router>
  );
}

export default App;