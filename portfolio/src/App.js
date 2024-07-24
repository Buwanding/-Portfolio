import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Portfolio from "./components/screens/Portfolio";
import { Home } from "./components/screens/Home";
import { Contactme } from "./components/screens/Contactme";
import AboutMe from "./components/screens/AboutMe";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contactme />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
