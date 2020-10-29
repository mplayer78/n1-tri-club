import React, { Fragment, useState } from 'react';
import hamburger from '../images/icon-hamburger.svg';
import closeIcon from '../images/icon-close.svg';
import n1Logo from '../images/n1_logo.svg';
import { Link } from 'gatsby';
import { useUIState } from '../context/uiContext';

interface LinkType {
  path: string
  title: string
  children: Array<LinkType>
  exposed?: boolean
}

const links: Array<LinkType> = [
  {
    path: "/",
    title: "Home",
    children: []
  },
  {
    path: "/training",
    title: "Training",
    children: []
  },
  {
    path: "/club-info",
    title: "Club Info",
    children: [
      {
        path: "/history",
        title: "Club History",
        children: []
      },
      {
        path: "/venues",
        title: "Club Venues",
        children: []
      },
      {
        path: "/committee",
        title: "Committee Information",
        children: []
      }
    ]
  },
  {
    path: "/membership",
    title: "Membership",
    children: []
  },
  {
    path: "/contact",
    title: "Contact Us",
    children: []
  }
]

export function Header() {
  const { setMenuExposed, setMenuHidden, state:{menuExposed} } = useUIState()
  return (
    <Fragment>
      <div className="header-bar">
      </div>
      <nav className="nav-bar">
        <LogoWithText />
        <ul className={`link-group ${menuExposed ? "link-group_exposed" : ""}`}>
          {links.map(link => (
            <li className="main-link">
              <Link to={link.path}>{link.title}</Link>
              {link.children.length > 0 && <ul className="dropdown">
              {link.children.map(subLink => (
                <li className="sub-link">
                  <Link to={subLink.path}>{subLink.title}</Link>
              </li>
              ))}
              </ul>}
          </li>
          ))}
        </ul>
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
