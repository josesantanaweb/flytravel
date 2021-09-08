import React from "react";
import NewsLetter from "components/Home/Newsletter/Newsletter";
import Brands from "components/Home/Brands/Brands";
import Logo from "components/Logo/Logo";

const MainFooter = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <NewsLetter />
        <Brands />
        <div className="main-footer-items">
          <div className="main-footer-item">
            <Logo />
            <div className="main-footer-social">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
            </div>
          </div>

          <div className="main-footer-item">
            <h6 className="main-footer-menu">Links Rapidos</h6>
            <a href="#" className="main-footer-link">
              Empresa
            </a>
            <a href="#" className="main-footer-link">
              Servicios
            </a>
            <a href="#" className="main-footer-link">
              Contacto
            </a>
          </div>

          <div className="main-footer-item">
            <h6 className="main-footer-menu">Busqueda</h6>
            <a href="#" className="main-footer-link">
              Destinos
            </a>
            <a href="#" className="main-footer-link">
              Boletos
            </a>
            <a href="#" className="main-footer-link">
              Paquetes
            </a>
          </div>

          <div className="main-footer-item">
            <h6 className="main-footer-menu">Soporte</h6>
            <a href="#" className="main-footer-link">
              Terminos
            </a>
            <a href="#" className="main-footer-link">
              Políticas de Privacidad
            </a>
            <a href="#" className="main-footer-link">
              FAQ
            </a>
          </div>
        </div>
        <div className="main-footer-copy">
          © 2020 FLY TRAVEL Todos los Derechos Reservados
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
