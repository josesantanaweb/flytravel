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
            titleCaption="CON FLY THE WORLD"
            subtitle="Precio por persona ida y vuelta"
          />
          <div className="airline-logo">
            <img src="../images/airlines/airline/flytheworld.jpg" alt="" />
          </div>

          <div>
            <div className="airline-description">
              <li className="airline-description-item">
                <h6>Aerolinea Fly the world Airlines</h6>
                <p>
                  Fly the World es una aerolínea venezolana establecida en 2014 y que opera desde
                  Octubre de 2019 con la modalidad de alquiler de aerolíneas (charter) que realizan
                  vuelos comerciales. Su oficina principal está ubicada en Caracas, sin embargo 
                  cuentan con presencia en Republica Dominicana, Argentina, Brasil, Paraguay y Ecuador; 
                  próximamente en Colombia y Perú. 
                  <br />
                  <br />
                  Sus principales vuelos fueron desde Venezuela hacia Republica Dominicana.
                  <br />
                  <br />
                  Fly the World es una de las aerolíneas asociadas a nuestra agencia FlyTravelGoo, por ende, a través de nuestra página web <a href="www.flytravelgoo.com">www.flytravelgoo.com</a> puedes cotizar tu pasaje en manos de nuestros agentes.
                  <br />
                  <br />
                  <b>Destinos</b>
                  <br />
                  <br />
                  Entre los destinos de esta aerolínea están:
                  <br />
                  <br />
                  <b>Punta Cana (Internacional)</b>
                  <br />
                  <br />
                  <b>Maracaibo (Nacional)</b>
                  <br />
                  <br />
                  <b>Caracas (Nacional)</b>
                  <br />
                  <br />
                  <b>Valencia (Nacional)</b>
                  <br />
                  <br />
                  Itinerarios de Fly The World
                  <br />
                  <br />
                  <b>Fly the World ofrece vuelos charter a través de la aerolínea World Atlantic. Las rutas son las siguientes</b>
                  <br />
                  <br />
                  Caracas- Punta Cana (Lunes, Miércoles, Viernes y Domingo)
                  <br />
                  <br />
                  Valencia – Punta cana (Lunes y Viernes)
                  <br />
                  <br />
                  Maracaibo – Punta Cana (Miércoles y Sábado)
                  <br />
                  <br />
                  <b>Equipaje</b>
                  <br />
                  <br />
                  El equipaje permitido por fly the world es el siguiente
                  <br />
                  <br />
                  Clase económica: 1 maleta de mano 8kg
                  <br />
                  <br />
                  1 maleta de 25kg para llevar en la bodega
                  <br />
                  <br />
                  Clase Ejecutiva: Maleta de mano de 8kg
                  <br />
                  <br />
                  2 maletas de 25 kg c/u para llevar en la bodega
                  <br />
                  <br />
                  <b>Mascotas</b>
                  <br />
                  <br />
                  Cabina: Peso máximo 8 kg 75$
                  <br />
                  <br />
                  Bodega: Peso máximo 30 kg 100$
                  <br />
                  <br />
                  Se permiten sólo 2 mascotas en cabina y 4 en bodega. Sólo se aceptaran mascotas previamente confirmada en la agencia de viajes o directamente con la aerolínea.
                  <br />
                  <br />
                  Para las mujeres embarazadas: Se debe presentar el certificado médico y se aceptarán mujeres con 32 semanas de gestación máximo. 
                  <br />
                  <br />
                  Aeropuertos donde opera Fly the World: Aeropuerto Internacional de Maiquetia
                  <br />
                  <br />
                  Aeropuerto Internacional Arturo Michelena (Valencia)
                  <br />
                  <br />
                  Aeropuerto Internacional de la Chinita (Maracaibo)
                  <br />
                  <br />
                  Fly the world ofrece una de las mejores tarifas promocionales en cuanto a vuelos baratos, por lo que en nuestra agencia FlyTravelGoo puedes reservar sin ningún problema. 
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
