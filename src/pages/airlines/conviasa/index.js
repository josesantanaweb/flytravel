import React, { useState } from "react";
import { useRouter } from "next/router";
import Hero from "components/Hero/Hero";
import TitleSection from "components/TitleSection/TitleSection";
import MainFooter from "components/MainFooter/MainFooter";

const Conviasa = () => {
  const router = useRouter();
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
            <img src="../images/airlines/airline/cv.png" alt="" />
          </div>

          <div>
            <div className="airline-description">
              <div className="airline-description-item">
                <h6>Aerolinea Conviasa</h6>
                <p>
                  Conviasa es una aerolínea venezolana creada en el 2004
                  reemplazando a la extinta Viasa. Su nombre completo es
                  (Consorcio Venezolano de Industrias Aeronáuticas y Servicios
                  Aéreos S.A.) y su sede principal está ubicada en el Aeropuerto
                  Internacional de Maiquetía. Su primer vuelo fue realizado el
                  28 de noviembre de 2004 desde el Aeropuerto{" "}
                  <b>“Oscar Machado Zuloaga”</b> rumbo al aeropuerto
                  internacional del Caribe Santiago Mariño, en Porlamar. Pero no
                  es hasta el 10 de Diciembre de 2004 donde la aerolínea{" "}
                  <b>
                    inicia formalmente sus operaciones de vuelos nacionales e
                    internacionales.
                  </b>
                  <br />
                  <br />
                  Se le conoce también como la “Aerolínea bandera de Venezuela”
                  pues es la más representativa del país y además lleva la
                  bandera venezolana en la cola de los aviones Conviasa como
                  emblema.
                  <br />
                  <br />
                  “El Placer de volar” es su slogan. Puedes comprar tus boletos
                  sin problema en nuestra agencia de viajes virtual
                  www.flytravelgoo.com
                  <br />
                  <br />
                  <b>Conviasa</b> ofrece una amplia variedad de destinos
                  nacionales e internacionales.
                  <br />
                  <br />
                  Entre los nacionales tenemos:
                  <br />
                  <br />
                  Barcelona, Barinas, Barquisimeto, Cumaná, El Vigía (Mérida),
                  La Fria (Táchira), Las Piedras (Falcón), Maturín, Puerto
                  Ayacucho (Amazonas), Puerto Ordaz, Apure, Santo Domingo
                  (Táchira), Tucupita.
                  <br />
                  <br />
                  Debido a las situaciones actuales los únicos destinos
                  operativos
                  <br />
                  <br />
                  Caracas – Los Roques – Caracas (Lunes a Domingo)
                  <br />
                  <br />
                  Caracas – Porlamar – Caracas (Lunes, Martes, Jueves, Viernes,
                  Sábado y domingo)
                  <br />
                  <br />
                  Maracaibo – Porlamar – Maracaibo (Viernes y Domingo)
                  <br />
                  <br />
                  Porlamar – Valencia – Porlamar (Lunes y Sábado)
                  <br />
                  <br />
                  <span>Entre los destinos internacionales tenemos:</span>
                  Caracas – Cancún (Lunes, Miércoles, Viernes y Domingo)
                  <br />
                  <br />
                  Caracas – Santo Domingo (Martes y Sábado)
                  <br />
                  <br />
                  Caracas – ViruViru (Lunes y Viernes)
                  <br />
                  <br />
                  Otros destinos Internacionales que ofrece Conviasa: Bogotá,
                  Buenos Aires, La Habana, Madrid, Manaus, Panamá y Puerto
                  España.
                  <br />
                  <br />
                  <span>Entre los destinos internacionales tenemos:</span>
                  Tanto para destinos nacionales e internacionales Conviasa
                  permite hasta 5 kg en el equipaje de mano y 23 kg en la
                  bodega. Dependiendo del destino internacional pueden variar
                  los impuestos por sobrepeso.
                  <br />
                  <br />
                  <span>Equipaje Permitido</span>
                  Tanto para destinos nacionales e internacionales Conviasa
                  permite hasta 5 kg en el equipaje de mano y 23 kg en la
                  bodega. Dependiendo del destino internacional pueden variar
                  los impuestos por sobrepeso.
                  <br />
                  <br />
                  <span>Flota de Aviones Conviasa</span>
                  <b>Conviasa</b> posee un total de 32 aviones en su flota,
                  desglosados quedan así:
                  <br />
                  <br />
                  Airbus A319-100 Operado por el Gobierno de Venezuela
                  <br />
                  <br />
                  Boeing 737-200 Operado por el Gobierno de Venezuela
                  <br />
                  <br />
                  Cessna 208 Caravan (8 unidades): Capacidad para 14 pasajeros.
                  Destinos de corta media distancia, Para aeropuertos con pista
                  corta.
                  <br />
                  <br />
                  Embraer E- 190 (20 unidades) Capacidad para 104 pasajeros.
                  Destinos de media- corta distancia.
                  <br />
                  <br />
                  Airbus A-340 -200. Capacidad para 239 pasajeros, ideal para
                  viajes de larga distancia.
                  <br />
                  <br />
                  Airbus A 340-300. Capacidad para 255 pasajeros, ideal para
                  destinos de larga distancia.
                  <br />
                  <br />
                  Si deseas comprar un billete de avión con <b>Conviasa</b>, sea
                  para ida y vuelta o solo ida, puedes hacerlo con antelación
                  por nuestra página web{" "}
                  <a href="www.flytravelgoo.com">www.flytravelgoo.com</a>
                  <br />
                  <br />
                  Pasajeros de Tercera edad: Deberán presentar copia de cedula
                  de identidad legible para poder disfrutar de una tarifa
                  especial durante vuelos nacionales.
                  <br />
                  <br />
                  Menores de edad sin acompañantes: Solo se permiten menores
                  desde los 7 años hasta los 17 años de edad, los mismos deben
                  presentar una autorización por su representante legal. Al
                  realizar el check-in en el aeropuerto el menor debe estar
                  acompañado por sus padres o representante legal.
                  <br />
                  <br />
                  <span>Traslado de mascotas</span>
                  <li>
                    Certificado de vacunación nacional antirrábica vigente no
                    mayor a 1 año
                  </li>
                  <li>
                    Solo es permitido un máximo de 2 animales en cabina por
                    vuelo
                  </li>
                  <li>
                    Debe poseer su propio KENNEL de acuerdo a las
                    especificaciones aeronáuticas
                  </li>
                  <li>
                    El costo del traslado es de 50 USD con un peso máximo
                    permitido hasta 30kg.{" "}
                  </li>
                  <br />
                  Si deseas una información detallada sobre esta u otra
                  aerolínea puedes escribirnos al número 0414-3495848 o
                  seguirnos en nuestro Instagram @FlyTravelGoo.
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

export default Conviasa;
