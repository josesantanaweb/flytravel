import React, { useState } from "react";
import TitleSection from "components/TitleSection/TitleSection";
import Button from "components/Button/Button";

const UsComponent = () => {
  return (
    <div className="us">
      <div className="container">
        <TitleSection
          center="true"
          title="SOBRE"
          titleCaption="NOSOTROS"
          subtitle="Precio por persona ida y vuelta"
        />
        <div className="us-history-1">
          <div className="us-image">
            <img src="images/us/us-1.png" alt="" />
            <span className="us-path1">
              <img src="images/us/us-path.png" alt="" />
            </span>
            <span className="us-path2">
              <img src="images/us/us-path.png" alt="" />
            </span>
          </div>
          <div>
            <h5 className="us-title">Historia</h5>
            <p className="us-text">
              Sede CARACAS KIU System Solutions ofrece tecnología de nueva
              generación mediante una suite integrada de soluciones para líneas
              aéreas desde 2003. Somos la compañía líder en América Latina en
              brindar aplicaciones tecnológicas y estamos expandiendo nuestra
              presencia a nivel mundial.
              <br />
              <br />
              Desde su origen, KIU ha contado como fortaleza la probada
              experiencia de sus fundadores en el área, especialmente su CEO,
              quien ha sido exitoso en el negocio de los tours operadores, así
              como en la fundación de una compañía aérea, por lo que pudo
              aplicar diligentemente esos conocimientos y experiencia en la
              plataforma de KIU, con la idea matriz que guía el sistema a
              funcionar desde la necesidad del usuario operador y de la compañía
              aérea.
            </p>
          </div>
        </div>

        <div className="us-history-2">
          <div>
            <h5 className="us-title">Historia</h5>
            <p className="us-text">
              Sede VALENCIA omo fortaleza la probada experiencia de sus
              fundadores en el área, especialmente su CEO, quien ha sido exitoso
              en el negocio de los tours operadores, así como en la fundación de
              una compañía aérea, por lo que pudo aplicar diligentemente esos
              conocimientos y experiencia en la plataforma de KIU, con la idea
              matriz que guía el sistema a funcionar desde la necesidad del
              usuario operador y de la compañía aérea.
            </p>
          </div>
          <div className="us-image">
            <img src="images/us/us-1.png" alt="" />
            <span className="us-path1">
              <img src="images/us/us-path.png" alt="" />
            </span>
            <span className="us-path2">
              <img src="images/us/us-path.png" alt="" />
            </span>
          </div>
        </div>

        <div className="us-mision">
          <div className="us-image">
            <img src="images/us/us-2.png" alt="" />
            <span className="us-path1">
              <img src="images/us/us-path.png" alt="" />
            </span>
            <span className="us-path2">
              <img src="images/us/us-path.png" alt="" />
            </span>
          </div>
          <div>
            <h5 className="us-title">Misión</h5>
            <p className="us-text">
              Potenciamos a las aerolíneas con diferentes modelos comerciales
              mediante el desarrollo de soluciones tecnológicas integrales,
              robustas y eficientes. Somos socios estratégicos de nuestros
              clientes, ayudándolos a mejorar la rentabilidad y fidelizar su
              mercado, con una actitud empática y responsable.
            </p>
            <h5 className="us-title">Visión</h5>
            <p className="us-text">
              Potenciamos a las aerolíneas con diferentes modelos comerciales
              mediante el desarrollo de soluciones tecnológicas integrales,
              robustas.
            </p>
          </div>
        </div>
      </div>

      <div className="us-oursweb">
        <span className="us-oursweb-path">
          <img src="images/us/us-path2.png" alt="" />
        </span>
        <div className="us-oursweb-content">
          <TitleSection
            center="true"
            title="NUESTRA"
            titleCaption="WEB"
            subtitle="Sistema de busqueda y reserva"
          />

          <div className="us-oursweb-items">
            <div className="us-oursweb-item">
              <span className="us-oursweb-icon">
                <img src="images/us/icon-1.png" alt="" />
              </span>
              <div>
                <h5 className="us-title">Busqueda</h5>
                <p className="us-text">
                  Curabitur vel urna sit amet nunc ornare efficitur a eget ante.
                  Orci varius natoque penatibus.
                </p>
              </div>
            </div>

            <div className="us-oursweb-item">
              <span className="us-oursweb-icon">
                <img src="images/us/icon-2.png" alt="" />
              </span>
              <div>
                <h5 className="us-title">Reserva</h5>
                <p className="us-text">
                  Curabitur vel urna sit amet nunc ornare efficitur a eget ante.
                  Orci varius natoque penatibus.
                </p>
              </div>
            </div>

            <div className="us-oursweb-item">
              <span className="us-oursweb-icon">
                <img src="images/us/icon-3.png" alt="" />
              </span>
              <div>
                <h5 className="us-title">Viaja</h5>
                <p className="us-text">
                  Curabitur vel urna sit amet nunc ornare efficitur a eget ante.
                  Orci varius natoque penatibus.
                </p>
              </div>
            </div>

            <div className="us-more">
              <Button label="Ver Mas" className="button-primary mt-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="us-howtowe alternative">
        <div className="container">
          <TitleSection
            center="true"
            title="COMO"
            titleCaption="LO HACEMOS"
            subtitle="Donec tempus et lacu"
          />

          <div className="us-howtowe-items">
            <div className="us-howtowe-item">
              <h4>¿Ponisi posuere sagittis?</h4>
              <p>
                Quisque sit amet hendrerit sapien. Praesent at orci sit amet
                nisi posuere sagittis vel ac urna. Suspendisse elementum turpis
                magna, ac ultricies tellus maximus vel. Etiam tincidunt maximus
                augue id pharetra.
              </p>
            </div>
            <div className="us-howtowe-item">
              <h4>¿Ponisi posuere sagittis?</h4>
              <p>
                Quisque sit amet hendrerit sapien. Praesent at orci sit amet
                nisi posuere sagittis vel ac urna. Suspendisse elementum turpis
                magna, ac ultricies tellus maximus vel. Etiam tincidunt maximus
                augue id pharetra.
              </p>
            </div>
            <div className="us-howtowe-item">
              <h4>¿Ponisi posuere sagittis?</h4>
              <p>
                Quisque sit amet hendrerit sapien. Praesent at orci sit amet
                nisi posuere sagittis vel ac urna. Suspendisse elementum turpis
                magna, ac ultricies tellus maximus vel. Etiam tincidunt maximus
                augue id pharetra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsComponent;
