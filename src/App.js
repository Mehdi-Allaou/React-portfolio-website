import { Topbar } from "./components/topbar/Topbar";
import { Menu } from "./components/menu/Menu";
import { Intro } from "./components/intro/Intro";
import { About } from "./components/about/About";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";

import { useState } from "react";

import './app.scss'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
