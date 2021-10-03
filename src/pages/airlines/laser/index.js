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
            titleCaption="CON LASER"
            subtitle="Precio por persona ida y vuelta"
          />
          <div className="airline-logo">
            <img src="../images/airlines/airline/laser.jpg" alt="" />
          </div>

          <div>
            <div className="airline-description">
              <li className="airline-description-item">
                <h6>Aerolinea Laser</h6>
                <p>
                  Laser es una aerolínea venezolana que inicia operaciones el 11 de marzo de 1994 con la ruta Porlamar – Maiquetía. A finales del año 1995 Laser amplia sus rutas nacionales: Barquisimeto, Barcelona, Maracaibo, La fría, El vigía, Puerto Ordaz y Porlamar. En el año 2011 inauguran sus vuelos internacionales hacia la isla de Aruba.
                  <br />
                  <br />
                  A partir del año 2013 se inauguran las rutas hacia Punta Cana y Santo Domingo en Republica Dominicana. Para el año 2015 Panamá se suma a los destinos internacionales, y en el 2018 Curazao y Guayaquil.
                  <br />
                  <br />
                  El hub de las operaciones de Laser se encuentra en el aeropuerto Internacional de Maiquetía.
                  <br />
                  <br />
                  Laser cuenta con oficinas de ventas en Venezuela, Colombia y Republica Dominicana, Aruba, Ecuador y Curazao.
                  <br />
                  <br />
                  <b>Destinos nacionales</b>
                  <li>Valencia, Barcelona, El Vigía, Puerto Ordaz, Maracaibo, Barquisimeto, La Fría, Porlamar y Caracas.</li>
                  <li>El itinerario de vuelo desde y hacia Porlamar son los días Lunes, Martes, Viernes y Domingo. Los demás vuelos nacionales están suspendidos hasta el momento. </li>
                  <br />
                  <br />
                  <b>Destinos internacionales</b>
                  <li>Cancún (Jueves), Panamá (Lunes y Sábado), Santo Domingo (Martes, Miércoles y Viernes)</li>
                  <li>A través de nuestra página web flytravelgoo.com podrás consultar el destino de tu preferencia con la aerolínea Laser, en flytravelgoo nos preocupamos por las necesidades y requisitos de nuestros clientes.</li>
                  <br />
                  <br />
                  <b>Equipaje permitido</b>
                  <br />
                  <br />
                  <li>El equipaje permitido hacia y desde Panamá y Santo Domingo es de 1 maleta en bodega de 32kg y una maleta de mano de 8 kg.</li>
                  <li>El equipaje permitido en clase turista hacia y desde Cancún es de 1 pieza de 23kg y un equipaje de mano de 8 kg. </li>
                  <li>Para viajar a Santo Domingo en clase ejecutiva con conexión posterior es de 3 piezas en bodega de 23kg y un equipaje de mano de 8kg.</li>
                  <li>Para los vuelos nacionales el equipaje permitido es de una pieza de 30kg para la bodega y un equipaje de mano de 8 kg, exceptuando para la ruta de la fría donde se exige un equipaje de 15kg en bodega y un equipaje de mano de 8kg, no está permitido el exceso de equipaje ni maletas extras. </li>
                  <br />
                  <br />
                  <b>Para el traslado de mascotas</b>
                  <br />
                  <br />
                  <li>Se aceptan pasajeros con mascotas de apoyo emocional o lazarillo hasta 8 kg de peso en todas las rutas de Laser.</li>
                  <li>Al momento de realizar la compra del boleto debe notificarse que viajara con una mascota de apoyo emocional o lazarillo para ser tomado en cuenta por la aerolínea y no exceder el límite permitido de mascotas por vuelo</li>
                  <li>Estos animales deberán permanecer durante todo el viaje junto a su dueño y con un bozal </li>
                  <br />
                  <br />
                  <b>La Documentación necesaria para trasladar estos animales es la siguiente</b>
                  <br />
                  <br />
                  <li>Certificado de salud</li>
                  <li>Certificado de adiestramiento que acredite que es un perro lazarillo o de apoyo emocional</li>
                  <li>Registro de las vacunas actualizadas, incluyendo la antirrábica</li>
                  <li>Certificado de desparasitación</li>
                  <br />
                  <br />
                  <b>Servicios Especiales</b>
                  <br />
                  <br />
                  Entre otros servicios especiales que presta Laser están
                  <br />
                  <br />
                  <li>Pasajeros con movilidad reducida (silla de ruedas)</li>
                  <li>Traslado de horizontales (decesos) Solo aplica para vuelos nacionales</li>
                  <li>Damas en estado de gravidez (embarazadas) Deben contar con una autorización donde se indique el tiempo de embarazo para poder  viajar, aplica para mujeres con 3 meses de embarazado, y más de 7 meses</li>
                  <li>Traslado de cenizas (aplica para vuelos nacionales o internacionales)  Los pasajeros deben presentar los permisos que emite la funeraria para cremación, permiso sanitario y acta de defunción</li>
                  <br />
                  Si deseas obtener información sobre otra aerolínea en específico te invitamos ingresar al siguiente enlace www.flytravelgoo.com/aerolineas.
                  <br />
                  <br />
                  No olvides suscribirte a nuestra página web para recibir información actualizada sobre nuestros destinos, ofertas y promociones. También puedes encontrarnos en nuestro Instagram como @flytravelgoo. 
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
