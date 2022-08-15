import AboutPage from "./components/AboutPage"
import ExperiencePage from "./components/ExperiencePage"
import ProjectsPage from "./components/ProjectsPage"

import './App.css';
import { Link } from "react-scroll";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <div className="nav">
        <h2>Ian Acosta</h2>
        <nav className="nav__container__actions">
          <ul className="navlist">
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="experience">
                EXPERIENCE
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                PROJECTS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <section id="about"> <AboutPage /></section>
      <section id="experience"><ExperiencePage/></section>
      <section id="projects"><ProjectsPage/></section>
      <Footer/>
    </div>
  );
}
