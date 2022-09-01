import React from "react";
import Logo from "./Logo";
import NavbarElement from "./NavbarElement";
import Social from "./Social";

export default function Navbar({ dataNavbar, socialNetworks }) {
  const [navIsOpen, setNavIsOpen] = React.useState(false);

  function openNav() {
    setNavIsOpen(!navIsOpen);
    document.body.classList.toggle("toggle-scroll");
  }

  return (
    <>
      <section className="section-sidebar">
        <nav className="primary-navbar">
          <div className={navIsOpen ? "toggle-and-logo container active" : "toggle-and-logo container"}>
            <button onClick={openNav} className={navIsOpen ? "toggle-icon active" : "toggle-icon"}>
              <span></span>
            </button>
            <Logo/>
          </div>
          <div className={navIsOpen ? "navbar-tabs active" : "navbar-tabs"}>
            <div className="toggle-and-logo container toggle-and-logo-abierto">
              <div onClick={openNav} className={navIsOpen ? "toggle-icon active" : "toggle-icon"}>
                <span></span>
              </div>
              <Logo/>
            </div>
            <div className="labels-container">
              {dataNavbar.map((navElement) => <NavbarElement key={navElement.label} element={navElement}/>)}
            </div>
            <div className="redes-sociales-navbar">
              {socialNetworks.map((socialElement) =>  <Social socialElement={socialElement} />)}
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
