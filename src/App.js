// import { Route, Routes } from 'react-router';
import logo from "../src/images/vespa-logo.png";
import "./App.css";
import Navbar from "./components/side-nav";
import MenuClose from "./components/menu-close";
import SocialIcons from "./components/social-icons";

function App() {
  return (
    <>
      <div className="navlogo">
        <img src={logo} width={175} height={100} />
      </div>
      <div className="App">
        <Navbar />
      </div>
      <div className="menu-close">
        <MenuClose />
      </div>
      <div className="social-icons">
        <SocialIcons />
      </div>
    </>
  );
}

export default App;
