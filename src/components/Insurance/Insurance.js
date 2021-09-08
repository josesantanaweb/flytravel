import React, { useState } from "react";
import Slider from "react-slick";
import TitleSection from "components/TitleSection/TitleSection";
import Button from "components/Button/Button";

// Configuracion Carousel
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  variableWidth: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

// Controles para Slider
function SampleNextArrow({ onClick }) {
  return (
    <span className="insurance-testimony-item-arrow" onClick={onClick}>
      <i className="fa fa-angle-left" />
    </span>
  );
}

// Controles para Slider
function SamplePrevArrow({ onClick }) {
  return (
    <span className="insurance-testimony-item-arrow disabled" onClick={onClick}>
      <i className="fa fa-angle-left" />
    </span>
  );
}

const InsuranceComponent = () => {
  return (
    <div className="insurance">
      <div className="container">
        <div className="insurance-main">
          <img
            className="insurance-main-imagen"
            src="images/insurance/main.png"
          />
          <div className="insurance-main-content">
            <TitleSection
              center="true"
              title="
              SEGURO DE"
              titleCaption="VIAJE"
              subtitle="¿Qué ofrece la cobertura de seguros de FlyTravelGoo?"
            />
            <p className="insurance-paragraph">
              Contar con un seguro de viaje internacional significa ahorrarse un
              gran dolor de cabeza, y más en estos tiempos.
              <br />
              <br />
              <b>Asistencia médica 24 horas</b>
              <br />
              La asistencia médica es una de las principales razones para optar
              por el seguro de viajes ya que cubre cualquier emergencia médica
              que acontezca fuera de nuestro país de origen. Si viajas a Europa
              y contratas nuestro seguro de viaje internacional puedes gozar del
              beneficio que ofrece la Tarjeta Sanitaria Europea: acceder al
              sistema sanitario de cualquier país europeo y recibir la misma
              atención que un ciudadano natural.
            </p>
          </div>
        </div>
      </div>

      <div className="insurance-steps">
        <div className="container">
          <TitleSection
            center="true"
            title="TIPO DE"
            titleCaption="SEGURO DE VIAJES"
            subtitle="Existen diferentes tipos de seguro de viaje, entre ellos tenemos:"
          />
          <div className="insurance-steps-items">
            <div className="insurance-steps-item">
              <img src="images/insurance/ico-5.png" />
              <h6>Seguros de viajes para Familias </h6>
            </div>
            <div className="insurance-steps-item">
              <img src="images/insurance/ico-6.png" />
              <h6>Seguros de viajes para estudiantes</h6>
            </div>
            <div className="insurance-steps-item">
              <img src="images/insurance/ico-7.png" />
              <h6>Seguro de viajes individuales</h6>
            </div>
            <div className="insurance-steps-item">
              <img src="images/insurance/ico-2.png" />
              <h6>Seguro de Equipaje</h6>
            </div>
            <div className="insurance-steps-item">
              <img src="images/insurance/ico-3.png" />
              <h6> Seguro de viajes para tercera edad</h6>
            </div>
          </div>
        </div>
      </div>

      <section className="insurance-section">
        <div className="container">
          <div className="insurance-section-content">
            <TitleSection
              center="true"
              title="SEGURO"
              titleCaption=" DE VIAJES"
            />

            <section>
              <p>
                <b>Cobertura Covid – 19</b>
                <br />
                <br /> La salud de nuestros clientes es una de nuestras
                principales preocupaciones, en FlyTravelGoo no nos hacemos
                ajenos a la situación pandémica actual, por eso nos aseguramos
                de que el viajero acceda a las pruebas pertinentes para
                descartar cualquier posibilidad de contagio y así asegurar un
                viaje seguro.
              </p>
              <p>
                <b>Pérdida de Equipaje</b>
                <br />
                <br /> Al adquirir un seguro de viaje internacional, éste te
                garantiza un reembolso para que puedas comprar lo que necesites,
                mientras te ayudan a localizar tu equipaje.
              </p>
              <p>
                <b>Cancelación o interrupciones del vuelo</b> <br />
                <br />
                Podemos perder un vuelo debido a una causa de fuerza mayor, como
                que enferme un familiar, o fuertes cambios climáticos, como una
                tormenta de nieve, en cualquiera de estos casos el viajero puede
                recuperar su dinero por su vuelo perdido, o se le reintregra el
                coste del boleto para que logre viajar en una fecha cercana. Es
                importante destacar que Europa a diferencia de Estados Unidos,
                si exige un seguro de viaje, según el espacio Schengen: Una
                regulación emitida en los años 90 que le exige a los viajeros
                extranjeros llevar consigo un seguro de viaje que garantice su
                respaldo y protección en el continente.
                <br />
                <br />
                Entre los países que exigen este requisito están España,
                Alemania, Italia y Portugal.
                <br />
                <br />
                El país norteamericano no exige un seguro internacional a sus
                viajeros pero también es bueno contar con uno ya que cualquier
                consulta mínima en un hospital ronda los 300 dólares. Entre los
                beneficios que ofrece contar con un seguro de viaje para Estados
                Unidos están:
              </p>
              <li>Repatriación</li>
              <br />
              <li>Asistencia Legal</li>
              <br />
              <li>Gastos de hotel por convalecencia</li>
              <br />
              <li>Búsqueda y localización de equipaje</li>
              <br />
              <li>Acompañamiento de menores</li>
              <br />
              <p>
                La pregunta del millón… ¿Si viajo puedo asegurar el 100% de mi
                viaje? (Interlink) La mayoría de las aseguradoras de viajes
                internacionales aseguran un gran porcentaje.
                <br />
                <br />
                Debido al COVID 19 ¿Cuáles son los requisitos que necesito para
                un viaje seguro? (Interlink)
                <br />
                <br />
                ¿Qué beneficios me ofrece un seguro de viajes a Europa como un
                seguro de viaje a Estados Unidos) (Interlink) Debido al COVID 19
                ¿Cuáles son los requisitos que necesito para un viaje seguro?
                (Interlink)
                <br />
                <br />
                ¿Si vivo en Venezuela puedo optar por un seguro de viaje?
                (Interlink)
                <br />
                <br />
                ¿Necesito un seguro de viaje para ir a Venezuela, y cuál es su
                costo? (Interlink)
                <br />
                <br />
                ¿Al adquirir mi boleto, ya cuento con un seguro de viaje
                integrado? (Interlink)
                <br />
                <br />
              </p>
              <p>
                <b>Tipos de Seguros de viaje</b> <br />
                <br />
                Existen diferentes tipos de seguro de viaje, según el tipo de
                viajero, claro está, entre ellos tenemos:
                <br />
                <br />
                <li>Seguro de viaje para familias</li>
                <br />
                <li>Seguro de viaje para estudiantes</li>
                <br />
                <li>Seguro de viaje para pareja</li>
                <br />
                <li>Seguro de Viaje para Mochileros</li>
                <br />
                <li>Seguro de viaje para adultos mayores</li>
                <br />
                <br />
                No importa el destino que elijamos, sea Europa, Estados Unidos,
                o algún país de Latinoamérica, es importante contar con el
                respaldo de un seguro de viaje internacional en estos tiempos
                donde todo es incierto. En FlyTravelGoo contamos con las mejores
                coberturas de seguros para que nuestros viajeros disfruten sus
                vacaciones sin ningún contratiempo que lamentar.
              </p>
            </section>
          </div>
        </div>
      </section>

      <div className="insurance-testimony">
        <img
          className="insurance-testimony-shape"
          src="images/insurance/shape.png"
        />
        <div className="container">
          <div className="insurance-testimony-content">
            <div className="insurance-testimony-caption">
              <TitleSection
                title="TESTIMONIOS DE"
                titleCaption="NUESTROS CLIENTES"
                subtitle="Satisfechos con nuestros  servicios"
              />
              <Button label="Ver Mas" className="button-primary mt-4" />
            </div>
            <div className="insurance-testimony-items">
              <Slider {...settings}>
                <div className="insurance-testimony-item">
                  <img src="images/insurance/avatar-1.png" />
                  <p>
                    “Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos.”
                  </p>
                  <h5>Jonh Doe</h5>
                  <h6>CEO, FlyTravel</h6>
                </div>

                <div className="insurance-testimony-item">
                  <img src="images/insurance/avatar-2.png" />
                  <p>
                    “Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos.”
                  </p>
                  <h5>Jonh Doe</h5>
                  <h6>CEO, FlyTravel</h6>
                </div>

                <div className="insurance-testimony-item">
                  <img src="images/insurance/avatar-2.png" />
                  <p>
                    “Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos.”
                  </p>
                  <h5>Jonh Doe</h5>
                  <h6>CEO, FlyTravel</h6>
                </div>

                <div className="insurance-testimony-item">
                  <img src="images/insurance/avatar-2.png" />
                  <p>
                    “Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos.”
                  </p>
                  <h5>Jonh Doe</h5>
                  <h6>CEO, FlyTravel</h6>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceComponent;
