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
            <img src="../images/airlines/airline/estelar.jpg" alt="" />
          </div>

          <div>
            <div className="airline-description">
              <li className="airline-description-item">
                <h6>Aerolinea Estelar</h6>
                <p>
                  Aerolíneas Estelar Latinoamérica es otra aerolínea venezolana fundada en el año 2009. Su aeropuerto principal es el de Maiquetía y su sede se encuentra en Las Mercedes, Caracas. 
                  <br />
                  <br />
                  Entre sus destinos nacionales están:
                  <br />
                  <br />
                  <li>Caracas</li>
                  <li>Porlamar</li>
                  <li>Santo Domingo (Tachira)</li>
                  <li>Maracaibo</li>
                  <li>Cumaná</li>
                  <li>Barquisimeto</li>
                  <li>Puerto Ordaz</li>
                  <li>Maturín</li>
                  <br />
                  <br />
                  Destinos Internacionales
                  <br />
                  <br />
                  <li>Panamá</li>
                  <li>Buenos Aires</li>
                  <li>Lima</li>
                  <li>Santiago de Chile</li>
                  <li>Cancún</li>
                  <li>Madrid</li>
                  <li>Lisboa</li>
                  <br />
                  <br />
                  Servicio de equipaje según el destino
                  <br />
                  <br />
                  Para los vuelos nacionales el equipaje de mano solicitado es de 8kg y un equipaje para bodega hasta 23kg.
                  <br />
                  <br />
                  Para Santo Domingo del Táchira el equipaje de mano permitido es de 5kg y el equipaje de bodega 15 kg.
                  <br />
                  <br />
                  <b>Santiago de Chile y Lima</b>
                  <br />
                  <br />
                  1 equipaje de mano 8kg. 1 equipaje facturado en bodega 23kg
                  <br />
                  <br />
                  <b>Buenos Aires</b>
                  <br />
                  <br />
                  Primera clase: 1 equipaje de mano de 8kg – 3 Maletas de 23kg 
                  <br />
                  <br />
                  Clase Ejecutiva: 1 equipaje de mano 8kg – 2 maletas de equipaje facturado de 23 kg
                  <br />
                  <br />
                  Clase Turista: 1 equipaje de mano 8kg – 1 maleta equipaje facturado 23 kg.
                  <br />
                  <br />
                  <b>Madrid y Lisboa</b>
                  <br />
                  <br />
                  Primera clase: el equipaje de mano 8kg y 4 maletas de equipaje facturado por 23 kg
                  <br />
                  <br />
                  Clase Ejecutiva: Equipaje de mano 8 kg y 3 piezas facturadas por 23kg
                  <br />
                  <br />
                  Turista: 1 Equipaje de mano 8kg 2 piezas de equipaje facturado 23 kg
                  <br />
                  <br />
                  Recomendaciones de FlyTravelGoo y Aerolineas Estelar para un vuelo seguro y sin contratiempos
                  <br />
                  <br />
                  <li>Presentarse en el aeropuerto con la mayor antelación posible para no perder el vuelo</li>
                  <li>i viaja con silla de ruedas de baterías entréguela desconectada y con los bordes protegidos contra cortocircuitos</li>
                  <li>Llevar en equipaje de mano los medicamentos necesarios</li>
                  <br />
                  <br />
                  Beneficios que ofrece Estelar para personas con discapacidad
                  <br />
                  <br />
                  <li>Personal a bordo y en tierra está capacitado para atender a pasajeros con esta condición</li>
                  <li>El servicio de silla de ruidos no incluye costo alguno</li>
                  <li>El pasajero recibirá ayuda con el transporte de silla de ruedas, dispositivos de movilidad y aparatos de respiración asistida.</li>
                  <br />
                  <br />
                  Para el traslado de mascotas la aerolínea exige las siguientes condiciones
                  <br />
                  <br />
                  Peso máximo permitido: EL peso máximo permitido en la bodega es de 30 KG incluyendo el peso del KENNEL. 
                  <br />
                  <br />
                  No se permiten mascotas en cabina, a menos que sean de apoyo emocional (razas pequeñas)
                  <br />
                  <br />
                  Solo está permitido el traslado de perros y gatos y se permitirá una mascota por persona.
                  <br />
                  <br />
                  El traslado de mascotas es responsabilidad total del dueño. 
                  <br />
                  <br />
                  Artículos Prohibidos
                  <br />
                  <br />
                  Explosivos, Gases, Sustancias tóxicas e infecciosas, corrosivos, líquidos inflamables.
                  <br />
                  <br />
                  En cuanto a las mujeres embarazadas al momento de chequearse deben presentar en el aeropuerto 
                  <br />
                  <br />
                  <li>Informe médico donde se indique el tiempo de embarazo</li>
                  <li>Autorización para viajar por vía aérea, firmada y sellada por el medico</li>
                  <li>Deberán llenar un formulario donde exonera de responsabilidad a la empresa en caso de cualquier eventualidad durante el vuelo</li>
                  <br />
                  <br />
                  Aerolíneas Estelar no permite viajar en vuelos internacionales a mujeres con más de 32 semanas de embarazo, y a mujeres con más de 35 semanas de embarazo en vuelos nacionales. 
                  <br />
                  <br />
                  Para información sobre esta y otras aerolíneas puedes ir al enlance <a href="www.flytravelgoo/aerolineas">www.flytravelgoo/aerolineas</a> y conocer el listado con el que trabajamos en flytravelgoo. No olvides seguirnos en Instagram como @FlyTravelGoo para enterarte de nuestros vuelos, ofertas, curiosidades, destinos, entre otras cosas. 
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
