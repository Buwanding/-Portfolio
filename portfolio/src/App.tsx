
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import Contact from "./screens/Contact";
import AboutMe from "./screens/AboutMe";
import Services from "./screens/Services";

function App() {
  return (
    <Router>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
