import React from "react";
import Logo from "components/Logo/Logo";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-items">
          <div className="footer-item">
            <Logo white />
            <div className="footer-social">
              <li>
                <i className="fa fa-facebook" />
              </li>
              <li>
                <i className="fa fa-twitter" />
              </li>
              <li>
                <i className="fa fa-facebook" />
              </li>
            </div>
          </div>
          <div className="footer-item">
            <a className="footer-menu">Links Rapidos</a>
            <a href="#" className="footer-link">
              Empresa
            </a>
            <a href="#" className="footer-link">
              Servicios
            </a>
            <a href="#" className="footer-link">
              Contacto
            </a>
          </div>
          <div className="footer-item">
            <a className="footer-menu">Busqueda</a>
            <a href="#" className="footer-link">
              Destinos
            </a>
            <a href="#" className="footer-link">
              Boletos
            </a>
            <a href="#" className="footer-link">
              Paquetes
            </a>
          </div>
          <div className="footer-item">
            <a className="footer-menu">Soporte</a>
            <a href="#" className="footer-link">
              Terminos
            </a>
            <a href="#" className="footer-link">
              Políticas de Privacidad
            </a>
            <a href="#" className="footer-link">
              FAQ
            </a>
          </div>
        </div>
        <div className="footer-copy">
          © 2020 FLY TRAVEL Todos los Derechos Reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
