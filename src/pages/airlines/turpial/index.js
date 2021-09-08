import React, { useState } from "react";
import { useRouter } from "next/router";
import Hero from "components/Hero/Hero";
import TitleSection from "components/TitleSection/TitleSection";
import MainFooter from "components/MainFooter/MainFooter";

const Turpial = () => {
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
            titleCaption="CON TURPIAL AIRLINES"
            subtitle="Precio por persona ida y vuelta"
          />
          <div className="airline-logo">
            <img src="../images/airlines/airline/tp.png" alt="" />
          </div>

          <div>
            <div className="airline-description">
              <li className="airline-description-item">
                <h6>Aerolinea Turpial Airlines</h6>
                <p>
                  Turpial Airlines es una aerolínea venezolana con sede en el
                  Aeropuerto Internacional Arturo Michelena, en Valencia. Fue
                  fundada en el año 2016 por un conjunto de empresarios con la
                  intención de ofrecer vuelos comerciales. Turpial dio inicio a
                  sus operaciones el 7 de Abril de 2017 hacia Maracaibo y
                  Porlamar en sus primeros destinos nacionales y Ciudad de
                  Panamá como primer destino Internacional.
                  <br />
                  <br />
                  Entre sus destinos nacionales se encuentran:
                  <br />
                  <br />
                  <li>
                    Valencia – Maracaibo / Maracaibo – Valencia (Miércoles y
                    Sábado)
                  </li>
                  <br />
                  <li>
                    Porlamar – Valencia / Valencia – Porlamar (Martes, Jueves y
                    Domingo)
                  </li>
                  <br />
                  <li>
                    Puerto Ordaz – Valencia / Valencia – Puerto Ordaz (Martes y
                    Sábado){" "}
                  </li>
                  <br />
                  <li>
                    Santo Domingo del Táchira – Porlamar / Porlamar – Santo
                    Domingo del Táchira (Jueves) Valencia Sto Domingo de Táchira
                    /Sto Domingo de Táchira Valencia (Jueves)
                  </li>
                  <br />
                  <span>Destinos Internacionales</span>
                  Valencia - Panamá / Panamá – Valencia (Domingo)
                  <br />
                  <br />
                  Valencia - Santo Domingo / Santo Domingo- Valencia (Miércoles,
                  Viernes)
                  <br />
                  <br />
                  Punta Cana – Valencia / Valencia – Punta Cana (Jueves,
                  Domingo)
                  <br />
                  <br />
                  Valencia –Cancún /Cancún Valencia (Lunes, Sábado)
                  <br />
                  <br />
                  Sedes Comerciales
                  <br />
                  <br />
                  Turpial Airlines tiene sedes en Venezuela, Panamá, República
                  Dominicana y Aruba
                  <br />
                  Si deseas volar con esta novedosa aerolínea no dudes en
                  ingresar en nuestro buscador de vuelos de www.flytravelgoo.com
                  y elegir el destino de tu preferencia: puede ser nacional o
                  internacional.
                  <br />
                  <br />
                  Flota
                  <br />
                  <br />
                  Turpial tiene 3 aviones Boeing 737 – 400, con capacidad de
                  entre 144 a 150 pasajeros.
                  <br />
                  <br />
                  <span>En cuanto al equipaje…</span>
                  La aerolínea ofrece a sus pasajeros la posibilidad de llevar
                  hasta 3 maletas
                  <br />
                  <br />
                  <li>1 de Equipaje de mano de 8kg</li>
                  <li>1 Maleta de 23 Kg en la Bodega</li>
                  <li>
                    Equipaje adicional: el equipaje adicional se paga en el
                    counter del aeropuerto y tiene un costo de 70$.{" "}
                  </li>
                  <br />
                  <span>Requisitos Migratorios para viajar a Panamá</span>
                  La aerolínea ofrece a sus pasajeros la posibilidad de llevar
                  hasta 3 maletas
                  <br />
                  <br />
                  <li>
                    El pasaporte debe estar valido y vigente, con un mínimo de
                    90 días para su vencimiento. Los pasaportes venezolanos con
                    prorroga son aceptados por el país centroamericano.{" "}
                  </li>
                  <li>Boleto aéreo de retorno</li>
                  <li>
                    Equipaje adicional: el equipaje adicional se paga en el
                    counter del aeropuerto y tiene un costo de 70$.
                  </li>
                  <li>
                    Solvencia económica de $500 por persona, es recomendable
                    poseerlos en efectivo o sino presentarlos: Cheque
                    certificado, carta de referencia bancaria o estado de cuenta
                    de la tarjeta de crédito.
                  </li>
                  <li>
                    Visa de turismo estampada. Este requisito no es aplicable
                    para venezolanos con residencia permanente en Panamá, ni
                    para venezolanos que cuenten con visa de: Estados Unidos,
                    Canadá, Australia, Reino Unido, China o Corea del Sur.
                  </li>
                  <br />
                  <span>
                    Requisitos migratorios para viajar a Republica Dominicana{" "}
                  </span>
                  <li>
                    Todo ciudadano venezolano se le exigirá visa de turismo para
                    ingresar a Republica Dominicana. La misma debe ser expedida
                    en la oficina consular dominicana con excepción de aquellos
                    que posean visa americana, visa Schengen, canadiense,
                    británica, pasaporte europeo, permiso laboral o residencia.
                  </li>
                  <li>
                    Pasaportes valido y vigentes con un mínimo de 6 meses de
                    vigencia. Los pasaportes venezolanos con prorroga son
                    aceptados en Republica Dominicana.
                  </li>
                  <li>Boleto aéreo de retorno</li>
                  <li>
                    Solvencia económica durante la estadía en Republica
                    Dominicana para demostrar que el pasajero puede mantenerse
                    por sus propios medios
                  </li>
                  <li>
                    Reservación valida en un hotel u apartamento, o carta de
                    invitación donde se refleje la dirección del familiar u
                    amigo que va a recibir al viajero.
                  </li>
                  <li>
                    Formato de declaración jurada de Salud de Republica
                    Dominicana es un requisito obligatorio de las autoridades
                    migratorias.{" "}
                  </li>
                  <br />
                  Para información más detallada acerca de los requisitos para
                  viajar a Republica Dominicana, Panamá o Cancún puedes
                  comunicarte con uno de nuestros agentes a través del
                  0414-3495848 o por nuestra página web en la sección{" "}
                  <a href="www.flytravelgoo.com/Preguntasfrecuentes">
                    www.flytravelgoo.com/Preguntasfrecuentes.
                  </a>
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

export default Turpial;
