import React, { useState } from "react";
import { useRouter } from "next/router";
import Hero from "components/Hero/Hero";
import TitleSection from "components/TitleSection/TitleSection";
import MainFooter from "components/MainFooter/MainFooter";

const Venezolana = () => {
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
            titleCaption="CON VENEZOALANA"
            subtitle="Precio por persona ida y vuelta"
          />
          <div className="airline-logo">
            <img src="../images/airlines/airline/vz.png" alt="" />
          </div>

          <div>
            <div className="airline-description">
              <div className="airline-description-item">
                <h6>Aerolinea Venezolana</h6>
                <p>
                  La Venezolana fue fundada en el 2001 como Rutas aéreas de
                  Venezuela RAVSA,) es una aerolínea, como su nombre lo dice de
                  Venezuela, cuya principal sede se encuentra en Maracaibo,
                  específicamente en el Aeropuerto Internacional de la Chinita.
                  <br />
                  <br />
                  <span>Destinos Nacionales e Internacionales</span>
                  Entre sus principales destinos, que puedes elegirlos a través
                  de nuestro buscador en flytravelgoo.com se encuentran:
                  <span>Nacionales</span>
                  Maracaibo, Porlamar Barquisimeto y Caracas
                  <br />
                  <br />
                  <span>Internacionales</span>
                  <li>
                    De Caracas a Cancún (Martes) Salida 9:00 am Llegada 11:30
                    am. De Cancún a Caracas (Martes) Salida 1:30pm llegada 5:00
                    pm
                  </li>
                  <li>
                    De Caracas a Panamá (Viernes) salida 12:30pm llegada 1:30 pm
                  </li>
                  <li>
                    De Panamá a Caracas (Viernes) Salida 3:30 pm Llegada 6:30 pm
                  </li>
                  <li>
                    De Caracas a Santo Domingo ( Jueves y Domingo) Salida 9:00am
                    Llegada 10:30am
                  </li>
                  <li>
                    De Santo Domingo a Ccs (Jueves y Domingo) Salidas 12:00 pm
                    llegada 1:00pm{" "}
                  </li>
                  <br />
                  <span>
                    *Destinos, horarios y frecuencia de vuelos actualizados en
                    Febrero 2021
                  </span>
                  Si deseas recibir una cotización para viajar con RAVSA a
                  cualquiera de estos destinos puedes escribir al correo{" "}
                  <a href="emisiones@fly-travelgo.com">
                    emisiones@fly-travelgo.com
                  </a>{" "}
                  o a través de nuestro Whatsapp 0414-3495848
                  <br />
                  <br />
                  <li>Sedes</li>
                  <br />
                  Venezolana de aviación cuenta con un counter en el Aeropuerto
                  Internacional de Tocumen y una sede en Panamá Calle Thais de
                  Pons Edificio Elege local 2, Bella Vista.
                  <br />
                  <br />
                  En Republica Dominicana se encuentran en L de Vega 45, Santo
                  Domingo.
                  <br />
                  <br />
                  Equipaje: en todos sus destinos RAVSA acepta 1 maleta de mano
                  de 8kg y una maleta de 23 kg para llevar en Bodega.
                  <span>Flota</span>
                  La flota con que cuenta La Venezolana es la siguiente
                  <br />
                  <br />
                  2 Boeing 737- 200 matriculas (YV3471) y (YV268T) Fue diseñado
                  para vuelos cortos de aproximadamente 4 horas o el equivalente
                  a 2580km de distancia. El Boeing 737-200 fue apodado “el
                  camastrón” y fue el transporte del presidente de la república
                  bolivariana de Venezuela hasta el año 2002. Este avión dio la
                  vuelta al mundo en 1987, siendo el primer avión militar
                  venezolano en cumplir esta hazaña.
                  <br />
                  <br />
                  Posee 3 tanques de combustible: 1 debajo del ala izquierda,
                  otro debajo del ala derecha y el último dentro del interior
                  del fuselaje.
                  <br />
                  <br />
                  2 Boeing MD -80 MD-83 (YV191T) y MD-82 (YV3475)
                  <br />
                  <br />
                  Características
                  <br />
                  <br />
                  Pasajeros 1era clase: 172
                  <br />
                  <br />
                  Pasajeros clase económica: 155
                  <br />
                  <br />
                  Carga de combustible: 26.498 litros
                  <br />
                  <br />
                  Recuerda que <b>FlyTravelGoo</b> ofrece las mejores tarifas y
                  promociones en cuanto a vuelos nacionales e internacionales.
                  Puedes encontrarnos en Instagram como <b>@FlyTravelGoo</b> y
                  ver nuestras publicaciones actualizadas.
                  <br />
                  <br />
                  A la hora de realizar tu pago puedes hacerlo via Zelle,
                  Paypal, transferencia bancaria en Bs.S o $ en efectivo (para
                  esta última debes acercarte a nuestras oficinas en Valencia)
                  <br />
                  <br />
                  En <b>FlyTravelGoo</b> manejamos información actualizada sobre
                  todas las aerolíneas que operan en el país, nos enfocamos en
                  darle la mejor atención a nuestros clientes antes, durante y
                  después de realizar alguno de sus viajes.
                  <br />
                  <br />
                  Sea destino nacional o internacional nuestros agentes de
                  viajes te prestarán la mejor atención, solo debes elegir la
                  fecha, destino, cantidad de pasajeros, tipo de clase y nuestro
                  buscador de vuelos te arrojará la información necesaria con la
                  aerolínea de tu preferencia. ¡Gracias por preferir volar con{" "}
                  <b>flytravelgoo!</b>
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

export default Venezolana;
