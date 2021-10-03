import React, { useState } from "react";
import { useRouter } from "next/router";
import Hero from "components/Hero/Hero";
import TitleSection from "components/TitleSection/TitleSection";
import MainFooter from "components/MainFooter/MainFooter";

const FlyTheWorld = () => {
  const router = useRouter();
  const { id } = router.query;
  const [images, setimages] = useState([
    {
      image: "../../../images/slider/airlines-1.jpg",
    },
  ]);

  return (
    <>
      <Hero images={images} />
      <div className="airlines">
        <div className="container">
          <TitleSection
            center="true"
            title="LOS MEJORES VUELOS"
            titleCaption="CON TURKISH"
            subtitle="Precio por persona ida y vuelta"
          />
          <div className="airline-logo">
            <img src="../images/airlines/airline/turkish.png" alt="" />
          </div>

          <div>
            <div className="airline-description">
              <li className="airline-description-item">
                <h6>Aerolinea Turkish</h6>
                <p>
                  Turkish Airlines es la aerolínea nacional de Turquía con base en Estambul. Fue fundada el 20 de Mayo de 1933. Posee una flota de más de 350 aviones; 52 destinos nacionales y 270 Internacionales. Entre su tripulación se encuentran 400 pilotos extranjeros, 66 pilotos mujeres, de las cuales 8 son extranjeras.
                  <br />
                  <br />
                  Los destinos de Turkish Airlines en Latinoamérica son Buenos Aires, Sao Paulo, Bogotá, Panamá, La Habana, Cancún y Caracas. Desde el 1 de Abril de 2008 forma parte de Star Alliance (una alianza aérea fundada por 5 aerolíneas en 1997) 
                  <br />
                  <br />
                  Turkish Airlines tiene códigos de acuerdo compartidos con las siguientes aerolíneas: 
                  <br />
                  <br />
                  <li>Air China</li>
                  <li>Air Europa</li>
                  <li>Air India</li>
                  <li>Air Nueva Zelanda</li>
                  <li>Avianca</li>
                  <li>All Nipon Airways</li>
                  <li>Lufthansa</li>
                  <li>Luxair</li>
                  <li>Singapore Airlines</li>
                  <li>Entre otras</li>
                  <br />
                  <br />
                  <b>Itinerarios</b>
                  <br />
                  <br />
                  La Flota de Turkish Airlines se despliega de la siguiente manera
                  <li><b>AirBus A 319- 100</b> (6 unidades) 126 Butacas</li>
                  <li><b>Airbus A320-200</b> (13 unidades) 153 Butacas</li>
                  <li><b>Airbus A321-600</b> (66 unidades) 188 Butacas</li>
                  <li><b>Airbus 321neo</b> 25 Unidades</li>
                  <li><b>Airbus A330-200</b> (13 unidades) 250 Butacas</li>
                  <li><b>Airbus A330-300</b> (40 Unidades) 289 Butacas</li>
                  <li><b>Boeing 737 – 800</b> (60 Unidades) 165 Butacas</li>
                  <li><b>Boeing 737 – 900ER</b> (15 unidades) 151 Butacas</li>
                  <li><b>Boeing 777 	- 300 ER</b> (33 unidades) 337 butacas</li>
                  <li>Aviones de Carga Turkish Airlines</li>
                  <li>Boeing 777F 8 Unidades</li>
                  <br />
                  <br />
                  Premios Internacionales concedido por Skytrax
                  <br />
                  <br />
                  <li>Mejor Aerolínea de Europa (2011, 2012, 2013 y 2014)</li>
                  <li>Mejor Catering en clase económica (2013 y 2014)</li>
                  <li>Mejor Aerolínea del Sur de Europa (2011, 2012, 2013 y 2014)</li>
                  <li>Tercera mejor aerolínea de Europa (2010)</li>
                  <li>Mejores asientos en clase económica Premium (2011)</li>
                  <li>Mejor comida a bordo en clase turista (2010)</li>
                  <br />
                  <br />
                  FlyTravelgoo te ofrece vivir la maravillosa experiencia de viajar con Turkish Airlines, disfrutar de sus platillos a bordo y además de conocer la emblemática ciudad de Estambul. En nuestro buscador de vuelos de la página web <a href="www.flytravelgoo.com">www.flytravelgoo.com</a> puedes realizar tu itinerario.
                  <br />
                  <br />
                  La ventaja de volar con Turkish Airlines es que puedes elegir otro destino como preferencia por ejemplo Berlín, Ámsterdam, Londres, entre otros, haciendo escala en Estambul. 
                  <br />
                  <br />
                  Apertura hacia Venezuela: Turkish Airlines viaja desde y hacia Caracas desde el año 2017.
                  <br />
                  <br />
                  Características de los asientos
                  <br />
                  <br />
                  <li>Clase Económica</li>
                  <li>Asientos con 79 cm de espacio para estirar las piernas</li>
                  <li>Ancho de asiento 46 cm para poder estirarse durante vuelos largos</li>
                  <li>Pantalla multimedia de 12 pulgadas</li>
                  <li>Reposapiés ajustable</li>
                  <li>Puerto de carga USB detrás y debajo del asiento</li>
                  <li>Y por supuesto: El servicio de comida a bordo, con una variedad de platos que se adaptan a todos los paladares.</li>
                  <br />
                  <br />
                  Clase Business o ejecutiva
                  <br />
                  <br />
                  <li>Los privilegios de volar en esta clase es que los pasajeros no hacen filas para hacer el check-in, sino en los mostradores destinados para clase Business.</li>
                  <br />
                  <br />
                  Características de los asientos del avión
                  <br />
                  <br />
                  <li>Asiento totalmente reclinable q se convierte en una cama de 193 cm</li>
                  <li>Lámpara de Lectura</li>
                  <li>Función de masaje</li>
                  <li>Mesilla ajustable y giratoria</li>
                  <li>Servicio multimedia de películas, música y documentales sobre el país destino (Turquía)</li>
                  <li>Equipaje de mano: El equipaje de mano permitido para clase económica es de 8kg y para la clase ejecutiva dos maletas de 16 kg. </li>
                  <li>Equipaje Facturado: El peso de equipaje permitido para todos sus vuelos es de 32kg. Los bebes tienen derecho a una maleta de 10kg y de 23kg con solicitud de equipaje.</li>
                  <br />
                  Los coches que no superen los 115cm están permitidos por la aerolínea.
                  <br />
                  <br />
                  Recuerda que si deseas vivir la experiencia de viajar con Turkish Airlines, solo debes hacer tu reserva a través de nuestro buscador de vuelos en <a href="#">www.flytravelgoo.com</a>
                  <br />
                  <br />
                  Además, puedes seguirnos a través de nuestro Instagram como @Flytravelgoo y así enterarte de nuestras tarifas, nuevas promociones y contenido de interés. 
                </p>
              </li>
            </div>
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default FlyTheWorld;
