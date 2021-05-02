import React, { Fragment, useState } from 'react';
import hamburger from '../images/icon-hamburger.svg';
import closeIcon from '../images/icon-close.svg';
import expandIcon from '../images/icon-expand.svg'
import n1Logo from '../images/n1_logo.svg';
import NewLogo from '../components/new_logo'
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
        <Link to="/">
          <LogoWithText/>
        </Link>
        <ul className={`link-group ${menuExposed ? "link-group_exposed" : ""}`}>
          {links.map(link => (
            <li className="main-link" key={link.title}>
              <Link to={link.path}>{link.title}</Link>
              {link.children.length > 0 && 
                <Fragment>
                  <img src={expandIcon} alt="Expand Selection"/>
                  <ul className="dropdown">
                    {link.children.map(subLink => (
                      <li className="sub-link" key={subLink.title}>
                        <Link to={subLink.path}>{subLink.title}</Link>
                      </li>
                    ))}
                  </ul>
                </Fragment>
              }
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
    <NewLogo/>
  </div>;
}
