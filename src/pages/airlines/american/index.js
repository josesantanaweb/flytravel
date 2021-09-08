import React, { useState } from "react";
import { useRouter } from "next/router";
import Hero from "components/Hero/Hero";
import TitleSection from "components/TitleSection/TitleSection";
import MainFooter from "components/MainFooter/MainFooter";

const American = () => {
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
            titleCaption="CON AMERICAN AIRLINES"
            subtitle="Precio por persona ida y vuelta"
          />
          <div className="airline-logo">
            <img src="../images/airlines/airline/aa.png" alt="" />
          </div>

          <div>
            <div className="airline-description">
              <li className="airline-description-item">
                <h6>Aerolinea American Airlines</h6>
                <p>
                  Fue fundada en EEUU en la década de los 30. American Airlines
                  es la aerolínea más grande del mundo por tamaño de flota (más
                  de 950 aviones con la insignia de AA han volado alrededor de
                  todo el planeta)
                  <br />
                  <br />
                  Sus primeros vuelos operaron entre Chicago y Nueva York. En
                  1945 American Airlines creó “American Overseas Airlines” donde
                  se empezaron a realizar vuelos transatlánticos. A partir 1960
                  American Airlines comenzó a volar con el Boeing 707.
                  <br />
                  <br />
                  Los vuelos 11 y 77 participaron en los ataques del 11 de
                  Septiembre del 2001, un hecho que cambió para siempre la
                  historia de la aviación. Durante los años siguientes la
                  aerolínea perdió mucho dinero hasta su recuperación en el
                  2005, donde obtuvo una ganancia de 58 millones de dólares.
                  <br />
                  <br />
                  En el 2013 AA se fusionó con US Airways, convirtiéndose en la
                  aerolínea más grande por tamaño de flota.
                  <br />
                  <br />
                  AA cubre un aproximado de 350 destinos en más de 50 países,
                  con sus centros de conexiones más grandes de EEUU en New York,
                  Los Ángeles, Miami, Dallas/Fort Worth, Chicago, Filadelfia,
                  Phoenix y Washington, D.C.
                  <br />
                  <br />
                  American Airlines es miembro de la alianza oneworld en donde
                  figuran otras aerolíneas importantes de renombre como: British
                  Airways, Qatar Airways, Iberia, Malaysia Airlines, Finnair,
                  entre otras.
                  <br />
                </p>
              </li>
              <li className="airline-description-item">
                <h6>American Airlines en Latinoamérica</h6>
                <p>
                  En 1990 AA inicia su expansión en Latinoamérica, inaugurando
                  vuelos a Asunción, Buenos Aires, Bogotá, La Paz, Guayaquil,
                  Rio de Janeiro, Quito, Santiago de Chile, entre otros. Miami
                  se convirtió la principal sede de operaciones de American
                  Airlines consolidándose como principal operador aéreo entre
                  Estados Unidos y la región.
                  <br />
                </p>
              </li>
              <li className="airline-description-item">
                <h6>Flota Actua</h6>
                <p>
                  Airbus A319-100 En servicio: 133 aviones Capacidad: 128
                  pasajeros
                  <br />
                  <br />
                  Airbus A320-200 En servicio: 45 aviones Capacidad: 150
                  pasajeros
                  <br />
                  <br />
                  Airbus A321-200 En servicio: 29 aviones Capacidad: 196
                  pasajeros
                  <br />
                  <br />
                  Boeing 737-800 En servicio: 304 aviones Capacidad: 172
                  pasajeros
                  <br />
                  <br />
                  Boeing 777-200 ER En servicio: 47 aviones Capacidad: 273
                  pasajeros
                  <br />
                  <br />
                  Boeing 777-300 ER En servicio: 20 aviones Capacidad: 304
                  pasajeros
                  <br />
                  <br />
                  Boeing 787-8: En servicio: 23 aviones Capacidad: 239 pasajeros
                  <br />
                  <br />
                  Boeing 787-9: En servicio: 22 aviones Capacidad: 285 pasajeros
                  <br />
                  <br />
                  En FlyTravelGoo te ayudamos a conseguir las mejores ofertas
                  con American Airlines para que vueles a EEUU en una de las
                  mejores aerolíneas.
                  <br />
                  <br />
                  ¿Cuánto equipaje puedo llevar? Se pueden registrar hasta 10
                  piezas de equipaje si el vuelo es doméstico, transatlántico o
                  transpacífico.
                  <br />
                  <br />
                  Puede registrar hasta 5 piezas de equipaje si está viajando
                  hacia o desde
                  <br />
                  <br />
                  México, Caribe, Centroamérica, Suramérica, Brasil
                  <br />
                  <br />
                  El peso permitido para clase económica es de 23 kg, mientras
                  que el peso para primera clase /ejecutiva es de 32 kg. Los
                  pasajeros que viajen en primera clase, ejecutiva o que sean
                  miembros de oneworld ® Emerald pueden registrar equipaje que
                  no pase de los 32 kg sin costo adicional.
                </p>
              </li>
              <li className="airline-description-item">
                <h6>Equipaje con sobrepeso.</h6>
                <p>
                  Para la región de Entre EE. UU, Puerto Rico, las Islas
                  Vírgenes de EE. UU. y Canadá el impuesto es de $100 si la
                  maleta excede los 32 kg y de $200 si excede los 45kg.
                  <br />
                  <br />
                  Para la región de México, El Caribe, Suramérica y
                  Centroamérica el impuesto es de $100 si excede los 32 kg y de
                  $200 si excede los 45kg
                  <br />
                  <br />
                  Si el viaje es hacia Europa el impuesto es de $100 si supera
                  los 32 kg y no se acepta equipaje mayor a 45kg.
                </p>
              </li>
              <li className="airline-description-item">
                <h6>Redes sociales de American Airlines</h6>
                <p>
                  Twitter: @AmericanAIr
                  <br />
                  <br />
                  Instagram: @AmericanAir
                  <br />
                  <br />
                  Facebook:{" "}
                  <a href="https://www.facebook.com/AmericanAirlines">
                    https://www.facebook.com/AmericanAirlines
                  </a>
                  <br />
                  <br />
                  Web: <a href="aa.com">aa.com</a>
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

export default American;
