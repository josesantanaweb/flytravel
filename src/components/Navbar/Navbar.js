import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import Logo from "components/Logo/Logo";
import Button from "components/Button/Button";
import Login from "components/Login";

const Navbar = ({ actualPath }) => {
  const [isSticky, setSticky] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const toggleLogin = () => setIsActive(!isActive);

  // Detectar scroll
  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 90) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  const navbarClassname = isSticky
    ? "sticky"
    : actualPath !== "/"
    ? "sticky-white"
    : "";

  const submenuActive = () => setSubmenu(true);
  const submenuInactive = () => setSubmenu(false);

  // console.log("esta es" + actualPath);

  if (actualPath === "confirmPayment") {
    return null;
  }

  return (
    <header className={`navbar ${navbarClassname}`}>
      <div className="navbar-content">
        <div className="container">
          <div className="navbar-bar">
            <div className="navbar-brand">
              <Logo
                white={isSticky ? false : actualPath !== "/" ? false : true}
              />
            </div>
            <nav className="navbar-menu">
              <a className="navbar-link" href="/">
                Inicio
              </a>
              <a className="navbar-link" href="/us">
                Empresa
              </a>
              <ClickAwayListener onClickAway={submenuInactive}>
                <span
                  className="navbar-link"
                  onMouseEnter={submenuActive}
                  onMouseLeave={submenuInactive}
                >
                  Servicio
                  <div
                    className={`navbar-submenu ${submenu ? "is-active" : ""}`}
                  >
                    <a className="navbar-submenu-link" href="/">
                      Vuelos
                    </a>
                    <a className="navbar-submenu-link" href="/">
                      Paquetes Turisticos
                    </a>
                    <a className="navbar-submenu-link" href="/insurance">
                      Seguros
                    </a>
                    <a className="navbar-submenu-link" href="/">
                      VIP
                    </a>
                    <a className="navbar-submenu-link" href="/">
                      Viajes Terrestres
                    </a>
                    <a className="navbar-submenu-link" href="/">
                      Alquileres de Coches
                    </a>
                  </div>
                </span>
              </ClickAwayListener>
              <a className="navbar-link" href="/offers">
                Ofertas
              </a>
              <a className="navbar-link" href="/airlines">
                Aerolineas
              </a>
              <a className="navbar-link" href="/">
                Contacto
              </a>
              <a className="navbar-link" href="/register">
                Registrate
              </a>
              <div className="navbar-login">
                <Button
                  className="button-primary"
                  label="Inicia Sesion"
                  onClick={toggleLogin}
                />
                <Login isActive={isActive} />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
