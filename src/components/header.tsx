import { Link } from "gatsby"
import React, {useState} from "react"
const n1_logo = require('../images/n1_logo.png');
const hamburger = require('../images/icon-hamburger.svg');

interface HeaderProps {
  siteTitle?: string
}

const Header = (props: HeaderProps) => {
  const [menuExposed, setMenuExposed] = useState(false)
  return (
  <div className="App">
    <header>
    <nav>
        <div className="logo">
          <img src={n1_logo} alt="N1 Tri Logo"/>
          <div className="logo-text">
            <div>Tri&nbsp;Club</div>
            <div>East&nbsp;Devon</div>
          </div>
        </div>
      <ul className={`nav-links ${menuExposed ? "menu-open" : ""}`}>
        <li className="nav-link nav-link--active">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link" >
          <Link to="/training">Training</Link>
        </li>
        <li className="nav-link">
          <Link to="/club-info">Club Info</Link>
        </li>
        <li className="nav-link">
          <Link to="/membership">Membership</Link>
        </li>
        <li className="nav-link">
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
      <button className="hamburger" onClick={() => setMenuExposed(!menuExposed)}>
        <img src={hamburger} alt="more options"/>
      </button>
      </nav>
    </header>
    </div>
  )
}

export default Header