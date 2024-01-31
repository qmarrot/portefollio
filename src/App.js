import './App.css';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import NavbarMenu from './components/navBar';
import Footer from './components/footer';
import Home from "./page/home";
import About from "./page/competences";

function App() {
  return (
      <Router  basename={process.env.PUBLIC_URL}>
          <NavbarMenu />
          <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/competences" element={<About />} />
          </Routes>

            <Footer />
      </Router>

  );
}

export default App;
