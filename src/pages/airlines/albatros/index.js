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
            titleCaption="CON ALBATROS"
            subtitle="Precio por persona ida y vuelta"
          />
          <div className="airline-logo">
            <img src="../images/airlines/airline/albatros.png" alt="" />
          </div>

          <div>
            <div className="airline-description">
              <li className="airline-description-item">
                <h6>Aerolinea ALbatros</h6>
                <p>
                  Es una aerolínea venezolana fundada en el año 2007. El 13 de Mayo de 2010 inicia sus operaciones. Sus oficinas comerciales se encuentran en Maracay su hub principal en el aeropuerto internacional de Maiquetía. 
                  <br />
                  <br />
                  Albatros cuenta con 2 modelos de aeronaves en su flota:
                  <br />
                  <br />
                  Embraer 120 Brasilia: es un avión presurizado, con capacidad para 30 pasajeros y posee alta velocidad de crucero. 
                  <br />
                  <br />
                  Boeing- 737-500: Es un avión con elevados estándares de calidad, tiene capacidad para 114 pasajeros y 12 asientos Premium.
                  <br />
                  <br />
                  Destinos nacionales e internacionales
                  <br />
                  <br />
                  <b>Albatros Airlines cubre las siguientes rutas nacionales</b>
                  <br />
                  <br />
                  <li>Caracas – Las Piedras (Paraguaná) Lunes y Jueves</li>
                  <li>Maracay – Las Piedras Miércoles</li>
                  <li>Caracas – Porlamar Jueves y Domingo</li>
                  <li>Maracay – Porlamar Viernes y Domingo</li>
                  <br />
                  <br />
                  <b>Rutas Internacionales</b>
                  <br />
                  <br />
                  <li>Caracas – Costa Rica Lunes y Viernes</li>
                  <li>Porlamar – Cali / Cali – Porlamar Sábados</li>
                  <br />
                  Política de Equipaje: Para los vuelos nacionales Albatros permite un equipaje de mano de 8 kg máximo y un equipaje facturado de 23kg. Para los vuelos internacionales en clase económica y regular se permite equipaje de mano de 8kg,  una maleta de 23 kg y en clase Premium: 2 maletas de 23 kg. 
                  <br />
                  <br />
                  Albatros Cargo
                  <br />
                  <br />
                  Albatros Airlines presta el servicio de agenciamiento y el traslado de mercancía a nivel nacional e internacional.
                  <br />
                  <br />
                  Consigue vuelos económicos con Albatros a través de nuestro buscador de vuelos en la página www.flytravelgoo.com Si deseas obtener información sobre otras aerolíneas con la que trabajamos en flytravelgoo ingresa en el siguiente enlace <a href="#">www.flytravelgoo.com/aerolineas</a>
                  <br />
                  <br />
                  Albatros es una de las aerolíneas más modernas en Venezuela. Además ofrece vuelos charter para grupos, equipos deportivos, representantes de negocios, traslados corporativos que deseen un vuelo más seguro, cómodo y puntual.
                  <br />
                  <br />
                  Las ventajas de los vuelos charter es que los clientes no tienen que someterse a horarios fijos de las rutas comerciales, sino con una atención más personalizada distinguiéndose de otras compañías que ofrecen el mismo servicio, pues Albatros Airlines ofrece excelentes tarifas en cuanto a este tipo de vuelos.
                  <br />
                  <br />
                  <b>Fundación Albatros</b>
                  <br />
                  <br />
                  La fundación albatros tiene la misión de ayudar a niños, jóvenes y ancianos con discapacidad y bajos recursos donde se le ofrece una ayuda económica para mejorar su calidad de vida. 
                  <br />
                  <br />
                  Todo el personal administrativo, operativo, directores y junta directiva trabajan en conjunto como una gran familia y forman parte de las actividades que se realizan dentro de la institución. Fundación Albatros es una gran demostración de caridad y de una empresa que se distingue por aportar valor a los más necesitados.
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
