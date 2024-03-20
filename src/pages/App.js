import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "./Home";
import NavBar from '../components/NavBar';
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Projects from "../pages/Projects";



function App() {
  document.title = "Albi's Portfolio"
  
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </Router>
  );
}

export default App;
