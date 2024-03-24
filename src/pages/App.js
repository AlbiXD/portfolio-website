import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NavBar from '../components/NavBar';

function App() {
  // Dynamically set the document title
  document.title = "Albi's Portfolio";
  
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={null} />
          <Route path="/blog" element={null} />
          <Route path="/projects" element={null} />
          <Route path="/contact" element={null} />
        </Routes>
      </Router>
  );
}

export default App;