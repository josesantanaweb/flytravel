import React, {useState} from 'react';
import TitleSection from "components/TitleSection/TitleSection";
import Container from "components/Container";
import Button from "components/Button/Button";

const Contact = () => {
  const [activeValencia, setActiveValencia] = useState(false);
  const [activeCaracas, setActiveCaracas] = useState(false);
  return (
    <>
      
      <div className="contact-medios">
        <TitleSection
          center="true"
          title="ES UN PLACER"
          titleCaption="ATENDERTE"
          subtitle="POR ESO TE OFRECEMOS DIFERENTES MEDIOS"
        />
        <Container>
          <div className="contact-items">
            <div className="contact-item">
              <img src="images/call-center.svg" />
              <div>
                <h6>Centro de Reservaciones</h6>
                <p>+58 21231223</p>
              </div>
            </div>
            <div className="contact-item">
              <img src="images/briefcase.svg" />
              <div>
                <h6>Trabaja con nosotros</h6>
                <p>worktravel@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <img src="images/email2.svg" />
              <div>
                <h6>Correo de Solicitudes</h6>
                <p>solicitudtravel@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <img src="images/qr.svg" />
              <div>
                <h6>Whatsapp</h6>
                <p>+58 2342342</p>
              </div>
            </div>
            <div className="contact-item">
              <img src="images/paper-plane.svg" />
              <div>
                <h6>Correo de Reclamos</h6>
                <p>reclamos@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <img src="images/map.svg" />
              <div>
                <h6>Direcciones</h6>
                <p>Valencia Av Bolivar</p>
                <p>Caracas Av Bolivar</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="contact-map">
        <TitleSection
          center="true"
          title="NUESTRAS"
          titleCaption="OFICINAS"
          subtitle="Precio por persona ida y vuelta"
        />
        <div className="contact-path">
          <img src="images/map.jpg" />
          <div className={`contact-offices valencia ${activeValencia ? 'active' : ''}`}>
            <div>
              <h3>VALENCIA</h3>
              <li>
                <h6>
                  <i className="fa fa-map-marker" />
                  Direccion
                </h6>
                <p>Valencia Av Bolivar</p>
              </li>
              <li>
                <h6>
                  <i className="fa fa-phone" />
                  Telefonos
                </h6>
                <p>+0123456789</p>
              </li>
            </div>
            <img src="images/us/us-1.png" />
          </div>
          <div className={`contact-offices caracas ${activeCaracas ? 'active' : ''}`}>
            <div>
              <h3>CARACAS</h3>
              <li>
                <h6>
                  <i className="fa fa-map-marker" />
                  Direccion
                </h6>
                <p>Caracas Av Bolivar</p>
              </li>
              <li>
                <h6>
                  <i className="fa fa-phone" />
                  Telefonos
                </h6>
                <p>+0123456789</p>
              </li>
            </div>
            <img src="images/us/us-1.png" />
          </div>
          <span 
            className="active-valencia"
            onMouseEnter={() => setActiveValencia(true)}
            onMouseLeave={() => setActiveValencia(false)}
          ></span>
          <span 
            className="active-caracas"
            onMouseEnter={() => setActiveCaracas(true)}
            onMouseLeave={() => setActiveCaracas(false)}
          ></span>
        </div>
      </div>
      <div className="contact-message">
        <TitleSection
          center="true"
          title="ESCRIBE TU"
          titleCaption="MENSAJE"
        />
        <Container>
          <div className="contact-row">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Correo Electronico" />
          </div>
          <div className="contact-row">
            <input type="text" placeholder="Tu Telefono" />
            <input type="text" placeholder="Asunto" />
          </div>
          <div className="contact-column">
            <textarea placeholder="Mensaje" />
          </div>
          <div className="contact-column">
            <Button label="Enviar" className="button-primary"/>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Contact
