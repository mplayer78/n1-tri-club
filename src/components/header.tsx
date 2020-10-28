import React, { Fragment } from 'react';
import hamburger from '../images/icon-hamburger.svg';
import closeIcon from '../images/icon-close.svg';
import n1Logo from '../images/n1_logo.svg';
import { Link } from 'gatsby';
import { useUIState } from '../context/uiContext';

export function Header() {
  const { setMenuExposed, setMenuHidden, state:{menuExposed} } = useUIState()
  return (
    <Fragment>
      <div className="header-bar">
      </div>
      <nav className="nav-bar">
        <LogoWithText />
        <div className={`link-group ${menuExposed ? "link-group_exposed" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/training">Training</Link>
          <Link to="/club-info">Club Info</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
        <div className={`link-buttons ${menuExposed ? "hidden" : ""}`}>
          <button className="button_clear" onPointerDown={setMenuExposed}>
            <img src={hamburger} alt="more options" />
          </button>
        </div>
        <div className={`link-buttons link-close ${!menuExposed ? "hidden" : ""}`}>
          <button className="button_clear" onPointerDown={setMenuHidden}>
            <img src={closeIcon} alt="close menu" />
          </button>
        </div>
      </nav>
    </Fragment>
  );
}
function LogoWithText() {
  return <div className="logo">
    <div className="logo_image">
      <img src={n1Logo} alt="n1 logo" />
    </div>
    <h3 className="logo_header">Tri Club</h3>
    <h3 className="logo_subheader">East Devon</h3>
  </div>;
}
