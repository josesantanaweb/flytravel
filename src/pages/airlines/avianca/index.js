import React, { useState } from "react";
import { useRouter } from "next/router";
import Hero from "components/Hero/Hero";
import TitleSection from "components/TitleSection/TitleSection";
import MainFooter from "components/MainFooter/MainFooter";

const Avianca = () => {
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
            titleCaption="CON AVIANCA"
            subtitle="Precio por persona ida y vuelta"
          />
          <div className="airline-logo">
            <img src="../images/airlines/airline/av.png" alt="" />
          </div>

          <div>
            <div className="airline-description">
              <li className="airline-description-item">
                <h6>Aerolinea Avianca</h6>
                <p>
                  Fue fundada el 5 de Diciembre de 1919 en Barranquilla,
                  Colombia. Inicialmente se denomino como Sociedad Colombo
                  Alemana de Transporte Aereo (scadta). Es la segunda aerolínea
                  más antigua del mundo, luego de la internacional KLM, sin
                  embargo es la principal referente de Latinoamérica.
                  <br />
                  <br />
                  Su primer vuelo fue realizado sin pasajeros, pues la finalidad
                  del mismo fue un despacho de cartas entre Barranquilla y
                  Puerto Colombia. A mediados de los años 20 Avianca inauguro
                  sus primeras rutas internacionales: Estados Unidos y
                  Venezuela, sus mercados más atractivos.
                  <br />
                  <br />
                  Durante la segunda guerra mundial, los alemanes tuvieron que
                  irse de Colombia, por lo que los nuevos accionistas acordaron
                  una fusión con el servicio aéreo colombiano (SACO), el
                  producto de dicha fusión llevó como nombre Aerovías nacionales
                  de Colombia, hoy en día Avianca.
                  <br />
                  <br />
                  Actualmente esta aerolínea cuenta con 200 aviones, 20.500
                  trabajadores, vuela a más de 100 destinos diferentes en 25
                  países de América y Europa, y tiene alrededor de 670 vuelos
                  diarios.
                  <br />
                  <br />
                  Avianca posee 3 hubs donde despacha sus vuelos:
                  <br />
                  <br />
                  Aeropuerto Internacional El Dorado, Bogotá Colombia
                  <br />
                  <br />
                  Aeropuerto Jorge Chavez, Lima Perú
                  <br />
                  <br />
                  Aeropuerto Monseñor Arnulfo Romero, San Salvador – El Salvador
                  <br />
                  <br />
                  Tips Para adquirir boletos baratos con Avianca:
                  <br />
                  <br />
                  <li>
                    Compra con anticipación: los vuelos tienen cupos de
                    diferentes tarifas, evidentemente la clase económica es la
                    primera que se agota, por eso debes estar al pendiente de
                    reservar con los precios especiales.
                  </li>
                  <br />
                  <li>
                    Estar dispuesto a madrugar: a mucha gente no le gusta
                    madrugar o esperar muchas horas en el aeropuerto, los vuelos
                    luego de las 9 am suelen ser más demandados y por ende más
                    costosos.
                  </li>
                  <br />
                  <li>Búsqueda extensiva</li>
                  <br />
                  En nuestro buscador de vuelos de Flytravelgoo tendrás la
                  opción de conseguir viajes con esta aerolínea y muchas otras
                  más. Si además quieres conocer con que otras líneas aéreas
                  trabajamos te invitamos a ir al siguiente enlace
                  www.flytravelgoo.com/airlines.
                </p>
              </li>
              <li className="airline-description-item">
                <h6>Destinos</h6>
                <p>
                  Entre los principales destino de Avianca están: Barcelona
                  (España), Buenos Aires, Cali, Cancún, Bogotá, Cartagena , Los
                  Ángeles, Londres, Nueva York, San Francisco, Boston, Curazao,
                  Toronto, entre muchos más.
                  <br />
                  <br />
                  Como nombramos anteriormente, Avianca es la principal
                  aerolínea de referencia en Latinoamérica, la más antigua en el
                  continente y la segunda, después de LATAM en tener la mayor
                  cantidad de flota aéra (número de aviones)
                  <br />
                  <br />
                  <b>Boeing 787 (13 unds)</b> Permite una gran eficiencia
                  durante el vuelo, ya que consume menos combustible y posee una
                  gran velocidad.
                  <br />
                  <br />
                  <b>Airbus A330 (8 unds)</b> Ideal para vuelos de media y larga
                  distancia.
                  <br />
                  Velocidad: 880 kilómetros por hora. Capacidad de carga 47000
                  kilogramos. 30 Asientos en clase ejecutiva y 222 en clase
                  económica.
                  <br />
                  <br />
                  <b>Airbus A321 (15 unds)</b> Emisiones, niveles de ruido y
                  consumo de combustible más bajo.Velocidad: 846 kilómetros por
                  hora. Capacidad de carga: 24200 kilogramos 12 asientos en
                  clase ejecutiva y 182 en clase económica.
                  <br />
                  <br />
                  <b>Airbus A320 (67 unds)</b> Avión eficiente, silencioso y
                  ecológico con capacidad de carga de 6300 kilogramos
                  aproximadamente. Velocidad: 828 km/h; capacidad de carga:
                  17600 kilogramos. Asientos: 12 en clase ejecutiva y 138 en
                  clase económica.
                  <br />
                  <br />
                  <b>Airbus A319 (25 unds)</b> Velocidad: 828 km/h Capacidad:
                  15300 kilogramos Asientos: 12 en clase ejecutiva y 108 en
                  clase económica. ATR-72 Aeronave para viajes regionales y de
                  corto recorrido. Velocidad: 440 km/h. 68 Asientos en clase
                  económica.
                  <br />
                  <br />
                  <b>Airbus A330F Cargo (6 unds)</b> Aviones de carga, con
                  capacidad de 68 toneladas c/u.
                  <br />
                  <br />
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

export default Avianca;
