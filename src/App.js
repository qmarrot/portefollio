import './App.css';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import NavbarMenu from './components/navBar';
import Footer from './components/footer';
import Accueil from "./page/home";
import Competences from "./page/competences";
import Projets from "./page/projets";

function App() {
  return (
      <Router  basename={process.env.PUBLIC_URL}>
          <NavbarMenu />
          <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/competences" element={<Competences />} />
                <Route path="/projets" element={<Projets/>} />
          </Routes>

            <Footer />
      </Router>

  );
}

export default App;
