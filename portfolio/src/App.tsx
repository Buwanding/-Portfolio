import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import Contact from "./screens/Contact";
import AboutMe from "./screens/AboutMe";
import Skills from "./screens/Skills";
function App() {
  return (
    <Router>
      <div className="min-h-screen dark:bg-gray-900 relative">
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
