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
            titleCaption="CON PLUS ULTRA"
            subtitle="Precio por persona ida y vuelta"
          />
          <div className="airline-logo">
            <img src="../images/airlines/airline/plusultra.jpg" alt="" />
          </div>

          <div>
            <div className="airline-description">
              <li className="airline-description-item">
                <h6>Aerolinea Plus Ultra</h6>
                <p>
                  Plus Ultra es una aerolínea española con oficinas en Ecuador, Perú, Venezuela, Italia y por supuesto en Madrid, España.
                  <br />
                  <br />
                  En julio de 2015 despega el primer vuelo de Plus Ultra líneas aéreas. Entre los destinos de Plus Ultra están
                  <br />
                  <br />
                  <li>Caracas</li>
                  <li>Lima</li>
                  <li>Madrid</li>
                  <li>Maracaibo</li>
                  <li>Tenerife</li>
                  <li>Quito</li>
                  <li>Guayaquil</li>
                  <br />
                  <br />
                  <b>Itinerarios</b>
                  <br />
                  <br />
                  <li>Madrid – Lima – Madrid (Lunes, Miércoles y Viernes)</li>
                  <li>Madrid – Caracas – Madrid (Martes y Sábado)</li>
                  <li>Caracas – Tenerife  (Sábado) Tenerife – Caracas (Domingo)</li>
                  <li>Madrid – Ecuador – Madrid (Miércoles, Viernes y Domingo)</li>
                  <li>Flota de Plus Ultra</li>
                  <li><b>Airbus SAS A340-300 275</b> Asientos (30 en Business, 21 Premium y 224 Clase Económica)</li>
                  <li><b>Airbus  A340-300</b> 289 Asientos (24 en Business, 265 Clase Económica)</li>
                  <li><b>Airbus  A340-600</b> 376 Asientos (Primera clase 8, Clase económica 368)</li>
                  <br />
                  <br />
                  Características de la clase ejecutiva
                  <br />
                  <br />
                  El pasajero puede transportar 3 maletas de 23kg y dos equipajes de mano de 8kg
                  <br />
                  <br />
                  Asientos desplegables que se convierten en cama
                  <br />
                  <br />
                  Cojines lumbares y dorsales
                  <br />
                  <br />
                  Snacks disponibles durante el vuelo
                  <br />
                  <br />
                  Sala VIP (Disponible en Madrid) 
                  <br />
                  <br />
                  Características de la clase económica:
                  <br />
                  <br />
                  Transporte de 2 maletas de 23kg. Está permitido equipaje de mano en cabina, alimentación balanceada y de calidad durante el vuelo. 
                  <br />
                  <br />
                  Si deseas volar a Madrid, Tenerife, Quito, Lima o Guayaquil FlyTravelGoo puede hacer tu sueño realidad junto con Plus Travel, solo debes buscar el destino de tu preferencia en nuestro buscador de vuelos. 
                  <br />
                  <br />
                  <b>Programa Premier Plus</b>
                  <br />
                  <br />
                  Es un programa diseñado para reconocer la fidelidad de los afiliados naturales y corporativos con la acreditación y redención de millas tanto en viajes con Plus Ultra como con los aliados comerciales. Cualquier persona natural mayor de 16 años puede afiliarse a este programa, totalmente gratis.
                  <br />
                  <br />
                  <li>Artículos Prohibidos</li>
                  <li>Líquidos y sólidos inflamables</li>
                  <li>Materiales oxidantes</li>
                  <li>Venenos y materiales radioactivos</li>
                  <li>Materiales corrosivos y ácidos</li>
                  <br/>
                  <br/>
                  <b>Para mujeres embarazadas y bebes</b>
                  <br/>
                  <br/>
                  <li>Las mujeres embarazadas podrán viajar antes de la semana 36 de embarazo, presentando un informe sobre la fecha estimada de parto. Durante las últimas 4 semanas de parto no podrá ser aceptada por Plus Ultra. Los bebes recién nacidos serán aceptados después de haber alcanzado  7 días de vida.</li>
                  <li>Dos bebes no pueden viajar con el mismo adulto, al menos uno de ellos debe tener más de 18 meses de nacido y se le asignara una silla homologada por la aerolínea justo al lado del padre o representante.</li>
                  <li>La tarifa por bebe que ocupa el asiento será la misma que la de niños entre 2 a 12 años.</li>
                  <li>Para el transporte de animales</li>
                  <li>Edad mínima: 10 meses</li>
                  <li>La mascota debe tener las vacunas requeridas</li>
                  <li>Debe viajar en un contenedor adecuado máximo 55cm de largo, 40 cm de ancho y 23 cm de profundidad</li>
                  <li>El peso permitido por el contenedor incluyendo el peso del animal debe ser de 8kg.</li>
                  <li>No se permitirán animales que representen una amenaza para los pasajeros y tripulación. En caso de ser aceptado el animal debe llevar un bozal para prevenir.</li>
                  <li>El contenedor debe disponer de la etiqueta verde “Animales vivos” y de la etiqueta negra “Este lado arriba”</li>
                  <li>El nombre, la dirección y número de teléfono del pasajero deben estar en el contenedor, y además en este mismo deben estar los recipientes de comida y bebida.</li>
                  <li>Para más información sobre esta y otras aerolíneas asociadas a flytravelgoo puedes dirigirte al siguiente enlace flytravelgoo.com/aerolíneas.</li>
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
