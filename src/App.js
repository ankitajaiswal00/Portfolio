import './App.scss';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Switch, Route} from 'react-router-dom';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Timeline from './pages/Timeline';
import { useState } from 'react';


function App() {
  const [navToggle, setNavToggle]=useState(false);
  
  const navClick = () => {
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <Navbar/>
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
              <Route path="/" exact>
                <>
                <Home />
                </>
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/experiments" exact>
                <Timeline />
              </Route>
              <Route path="/projects" exact>
                <Projects />
              </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
