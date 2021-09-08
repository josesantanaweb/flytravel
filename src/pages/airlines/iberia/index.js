import React, { useState } from "react";
import { useRouter } from "next/router";
import Hero from "components/Hero/Hero";
import TitleSection from "components/TitleSection/TitleSection";
import MainFooter from "components/MainFooter/MainFooter";

const Iberia = () => {
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
            titleCaption="CON IBERIA"
            subtitle="Precio por persona ida y vuelta"
          />
          <div className="airline-logo">
            <img src="../images/airlines/airline/ib.png" alt="" />
          </div>

          <div>
            <div className="airline-description">
              <div className="airline-description-item">
                <h6>Aerolinea Iberia</h6>
                <p>
                  Iberia es una de las más antiguas aerolíneas europeas y la
                  aerolínea más importante de España. El 28 de Junio de 1927 se
                  firma la constitución de Iberia, Compañía Área de transporte.
                  El 14 de Diciembre de ese mismo año se realizó el acto de
                  inauguración del primer vuelo comercial el que fue presidido
                  por el rey Alfonso XIII. La ruta de este primer vuelo fue
                  Madrid – Barcelona.
                  <br />
                  <br />
                  En nuestra agencia virtual <b>FlyTravelGoo</b> te ayudamos a
                  conseguir vuelos disponibles con esta increíble aerolínea.
                  <br />
                  <br />
                  En 1928 Iberia levanta vuelo: inicia su actividad comercial
                  con tres aviones, con capacidad para 10 pasajeros, dos
                  tripulantes, equipaje y carga, y su velocidad máxima era de
                  205 km/h
                  <br />
                  <br />
                  Entre la década de 1938 y 1948 se ofrecen vuelos a todo el
                  mundo, y entre el año 1949 y 1959 empiezan los vuelos
                  transatlánticos de esta compañía.
                  <br />
                  <br />
                  <span>Aerolinea Iberia Airlines</span>
                  Iberia cubre una gran cantidad de destinos a nivel
                  internacional en Norteamérica, Suramérica, Europa, Asia y
                  África.
                  <br />
                  <br />
                  Entre las principales ciudades de Norteamérica están: Miami,
                  Chicago, Calgary, Seattle, Ciudad de México.
                  <br />
                  <br />
                  Destinos importantes en Suramérica: Bogotá, Buenos Aires,
                  Santiago de Chile, Caracas, Rio de Janeiro, Medellín, Quito,
                  Lima.
                  <br />
                  <br />
                  Principales destinos en Europa: Berlín, Frankfurt, Estocolmo,
                  Praga, Ámsterdam, Paris, Londres, Roma, Moscú, Barcelona,
                  Madrid, entre otras ciudades importantes.
                  <br />
                  <br />
                  Destinos en Asia: Shanghái, Tokio, Dubai, Catar, Tel Aviv, El
                  Cairo, entre otros.
                  <br />
                  <br />
                  Destinos en África: Entebbe, Nairobi, Marruecos,
                  Johannesburgo, Dakar, etc.
                  <br />
                  <br />
                  Iberia cubre una gran variedad de destinos internacionales,
                  especialmente en Europa, si tu sueño es volar con esta
                  aerolínea, en <b>FlyTravelGoo</b> buscamos las mejores ofertas
                  adaptadas a tu presupuesto.
                  <br />
                  <br />
                  <span>Flota aérea</span>
                  <span>Airbus A350</span>
                  Es un avión de nueva generación, con la última tecnología
                  instalada y diseñado para ahorrar combustible. Tiene pasillos
                  más anchos y maleteros con mayor capacidad, bien pensado para
                  las necesidades y comodidades del pasajero. Unidades: 9
                  Asientos: 348 Propulsión: 2 Motores Roll Royce
                  <br />
                  <br />
                  <span>Airbus A330 -200/300</span>
                  Iberia tiene en su flota dos modelos del A330 el A330-200 y el
                  A330-300. Tiene la capacidad de despegar con un máximo de 242
                  toneladas.
                  <br />
                  <br />
                  Unidades: 16 y 8 Respectivamente
                  <br />
                  <br />
                  Propulsión: 2 motores IAE CFM56-5C4
                  <br />
                  <br />
                  Asientos: 254
                  <br />
                  <br />
                  Alcance: 12.700 km
                  <br />
                  <br />
                  <span>Airbus A-321 </span>
                  El Airbus A- 321 pertenece de los Airbus A-320 fue el primer
                  modelo ensamblado fuera de Francia
                  <br />
                  <br />
                  Propulsión: 2 Motores CFM International
                  <br />
                  <br />
                  Alcance: 4000km
                  <br />
                  <br />
                  Unidades: 11
                  <br />
                  <br />
                  Butacas: 200
                  <br />
                  <br />
                  <span>Airbus A-320 y A320 neo</span>
                  El modelo A 320neo fue una de las últimas incorporaciones a la
                  flota de Iberia, es un 50% más silencioso y respetuoso con el
                  medio ambiente pues emite 5000 toneladas menos de dióxido de
                  carbono (CO2) al año.
                  <br />
                  <br />
                  Propulsión: 2 motores CFM International
                  <br />
                  <br />
                  Unidades: 14 y 8 Respectivamente
                  <br />
                  <br />
                  Asientos: 180 y 186 Respectivamente
                  <br />
                  <br />
                  Alcance: 3500 – 2800 km
                  <br />
                  <br />
                  <span>Airbus A 319</span>
                  Es el modelo de avión más pequeño de la flota, actualmente
                  realiza rutas nacionales (España) y europeas.
                  <br />
                  <br />
                  Propulsión. 2 motores CFM International
                  <br />
                  <br />
                  Alcance: 3600- 5.100km
                  <br />
                  <br />
                  Unidades: 9
                  <br />
                  <br />
                  Butacas: 141
                  <br />
                  <br />
                  <span>Airbus A 321 y A321neo</span>
                  prestan servicio para Iberia Express Propulsión: 2 motores CFM
                  internacional
                  <br />
                  <br />
                  Alcance: 4000km
                  <br />
                  <br />
                  Unidades: 4 y 8 respectivamente
                  <br />
                  <br />
                  Asientos: 219
                  <br />
                  <br />
                  <span>Iberia A320 Iberia Express</span>
                  Propulsión: 2 Motores CFM
                  <br />
                  <br />
                  Alcance: 3.500km Asientos: 180 Unidades: 17
                  <br />
                  <br />
                  <span>Iberia Express</span>
                  Iberia Express es una aerolínea perteneciente a Iberia, la
                  cual ofrece vuelos de bajo coste en rutas de corto o medio
                  radio de distancia entre ciudades de España y de Europa. Fue
                  fundada el 25 de Marzo de 2012 y opera desde el hub de su
                  aerolínea matriz (Iberia) en el Aeropuerto de Madrid- Barajas
                  Adolfo Suarez.
                  <br />
                  <br />
                  Con <b>FlyTravelGoo</b> puedes adquirir tu boleto aéreo con
                  Iberia, ya que es una de las aerolíneas más preferidas por los
                  venezolanos residentes en España, principalmente. Si quieres
                  conocer otras aerolínea más a fondo te invitamos a ingresar en
                  el siguiente enlace{" "}
                  <a href="https://flytravelgoo.com/airlines">
                    https://flytravelgoo.com/airlines
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default Iberia;
