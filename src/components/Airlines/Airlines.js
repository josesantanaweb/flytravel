import React, { useState } from "react";
import Router from "next/router";
import TitleSection from "components/TitleSection/TitleSection";
import { data } from "data/data.json";

const AirlinesComponent = () => {
  return (
    <div className="airlines">
      <div className="container">
        <TitleSection
          center="true"
          title="LISTA DE"
          titleCaption="AEROLINEAS"
          subtitle="Viajar con aerolíneas baratas"
        />
        <div className="airlines-items">
          {data[5].airlines.map((item, key) => (
            <a
              onClick={() =>
                Router.push(`/airlines/${item.link}`, `/airlines/${item.link}`)
              }
              className="airlines-item"
              key={key}
            >
              <img src={`images/airlines/${item.image}`} alt="" />
              <div className="airlines-name">
                <h6>{item.name}</h6>
                <span>({item.abr})</span>
              </div>
            </a>
          ))}
        </div>
        <section className="airlines-section">
          <TitleSection
            center="true"
            title="NUESTRAS"
            titleCaption="AEROLINEAS"
            subtitle="Donec tempus et lacu"
          />
          <div className="airlines-paragraph">
            <div className="airlines-paragraph-items">
              <div>
                <h6>Aerolíneas de bajo costo</h6>
                <p>
                  No todas las aerolíneas ofrecen billetes o boletos baratos de
                  buenas a primera, pero si estás considerando un vuelo de bajo
                  coste debes asumir que ciertos beneficios como la comida o
                  bebida no están incluidos. En promedio la duración de estos
                  vuelos es de 3 horas y hay que tener en cuenta que estas
                  líneas aéreas no viajan a todos los países. Una de las
                  ventajas de estos vuelos es que son la perfecta opción para
                  viajes de fines de semana, pues con un equipaje de manos de no
                  más de 10 kg te estás ahorrando el coste adicional de lo que
                  implicaría llevar una maleta.
                  <br />
                  <br />
                  Si deseas recibir una información más detallada referente a
                  las aerolíneas de bajo costo te recomendamos obtener
                  información con uno de nuestros ejecutivos de venta, los
                  cuales puedes contactar vía WhatsApp: 0414-3495848 o al correo
                  electrónico emisiones@fly-travelgo.com
                </p>
              </div>
              <div>
                <h6>Ofertas de Aerolíneas</h6>
                <p>
                  Es muy común que distintas aerolíneas ofrezcan promociones,
                  entre ellas ofertas de vuelos en nuestro sitio web
                  www.flytravelgoo.com podrás ubicarlas fácilmente. Estas
                  ofertas se pueden encontrar en un día específico de la semana,
                  por eso es importante estar pendiente y tener paciencia, ya
                  que el sistema puede colapsar porque otros viajeros están
                  buscando la misma oferta.
                  <br />
                  <br />
                  Las aerolíneas que ofrecen distintas ofertas o promociones son
                  Avior, estelar, fly to los roques, Estelar, Conviasa, Rutaca,
                  La Venezolana, Albatros Airlines.
                </p>
              </div>
              <div>
                <h6>Aerolíneas de bajo costo en Venezuela</h6>
                <p>
                  Viajar desde Venezuela aun está considerado una opción
                  accesible en comparativa con los vuelos hacia Venezuela. Entre
                  las aerolíneas que ofrecen sus vuelos más baratos están Wingo
                  su principal destino es Bogotá, Colombia. Le sigue Turpial
                  Airlines, Avior, Copa Airlines entre otras. Los principales
                  destinos de estas aerolíneas se encuentran en países de
                  Latinoamérica: Colombia, Perú, Chile, Argentina, Panamá,
                  Brasil, Republica Dominicana y Europa..
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="airlines-section alternative">
        <div>
          <div className="airlines-paragraph">
            <h6>¿Cuáles son las aerolíneas más seguras?</h6>
            <p>
              Aunque no parezca, el avión es uno de los medios de transporte más
              seguros. Es difícil establecer una diferencia entre una aerolínea
              y otra pues todas comparten los mismos estándares de seguridad.
              Todos los aviones se someten a estrictas revisiones y
              mantenimiento antes de cada vuelo, además de un examen anual para
              verificar su estado. En resumen, que una aerolínea ofrezca boletos
              más económicos no quiere decir que sea menos segura, solo que
              ofrecerá menos comodidades con respecto a las que ofrecen boletos
              de mayor precio. los mismos estándares de seguridad. Todos los
              aviones se someten a estrictas revisiones y mantenimiento antes de
              cada vuelo, además de un examen anual para verificar su estado. En
              resumen, que una aerolínea ofrezca boletos más económicos no
              quiere decir que sea menos segura, solo que ofrecerá menos
              comodidades con respecto a las que ofrecen boletos de mayor
              precio.
              <br />
              <br />
              <span>FlyTravelGoo</span>
              en su compromiso por ofrecer un servicio seguro y de calidad a
              nuestros clientes tiene conocimiento de dichas medidas, por eso
              tomamos muy en cuenta sus necesidades y presupuesto: si quieren un
              vuelo barato, cómodo y accesible o algo más exclusivo. Para
              contactar con un agente de ventas y así conseguir un vuelo seguro,
              económico y hasta con seguro de viaje ingresa a nuestro formulario
              de contacto www.Flytravelgoo.com/contacto
              <br />
              <br />
              <span>¿Dónde buscar aerolíneas baratas?</span>
              A través de la web www.flyravelgoo.com y en nuestro motor de
              búsqueda puedes encontrar la aerolínea que más se adapte a tus
              criterios, recuerda poner la fecha de ida y de regreso, así como
              el destino y el buscador te arrojará las distintas aerolíneas que
              ofrecen vuelos económicos, puedes hacerlo incluso con días de
              antelación para saber en qué fechas saldrán dichas ofertas.
              También puedes seguirnos en Instagram @flytravelgoo y así conocer
              las ofertas que ofrecemos en tiempo real a través de nuestras
              historias destacadas.
              <br />
              <br />
              <span>
                ¿Qué aerolíneas internacionales están operando desde Venezuela
                en este momento?
              </span>
              Desde Venezuela se han autorizado para volar a las siguientes
              aerolíneas Avior Airlines, Copa Airlines, Conviasa, Estelar, LASER
              Airlines, Rutaca, Turpial Airlines, Turkish Airlines, la
              venezolana o RAVSA, Fly to los Roques, Fly the World y Albatros
              airlines. Para los vuelos de Caracas hasta Santo Domingo
              (Republica Dominicana) las aerolíneas que cubren esta ruta son:
              Avior Airlines (Lunes y Jueves), Conviasa (Martes y Sábado) LASER
              (Miércoles y Viernes) Turpial Airlines (Miércoles y Viernes) y
              Venezolana los días Jueves y Domingo. La Venezolana o Ravsa.
              <br />
              <br />
              <li>
                Rutaca cubre la ruta de Caracas – Punta Cana los días Martes y
                Domingo
              </li>
              <br />
              <li>
                Aerolíneas que viajan de Venezuela a Madrid: Para esta ruta
                tenemos las siguientes aerolíneas: Iberia, Air Europa y Plus
                Ultra (solo vuelos de ida y aplica para ciudadanos o residentes)
                Turkish Airlines y Estelar
              </li>
              <br />
              <li>
                Aerolíneas que viajan a México (Cancún): Avior (Viernes y
                Domingo) , Estelar (Lunes, Miércoles y Viernes) Rutaca
                (Miércoles y Sábado), La Venezolana (Domingo) y Turpial Airlines
                (Lunes y Sábado)
              </li>
              <br />
              <li>
                Para la ruta de Caracas- Estambul (Turquía) el itinerario de
                vuelo son los días Martes y Sábado.
              </li>
              <br />
              <li>
                Aerolíneas que viajan a Panamá desde Venezuela: Las líneas
                aéreas que cubren esta ruta son
              </li>
              <br />
              <li>Venezolana (Martes y Viernes)</li>
              <br />
              <li>Turpial Airlines desde Valencia (Domingo)</li>
              <br />
              <li>Estelar (Martes)</li>
              <br />
              <li>
                Copa Airlines desde Caracas (Miércoles, Jueves, Sábado y
                Domingo)
              </li>
              <br />
              <li>Copa Airlines desde Valencia (Lunes)</li>
              <br />
              <li>LASER (Lunes y Sábado)</li>
              <br />
              <li>Conviasa</li>
              <br />
              Vuelos de Venezuela a Chile: Copa Airlines con escala en Panamá
              <br />
              Vuelos baratos de Venezuela a EEUU o Miami. Para viajar a EEUU
              desde Venezuela existen diferentes tarifas, dependiendo de las
              escalas, aerolíneas y tipo de boleto (ejecutivo, primera clase,
              económica) Copa Airlines es de las aerolíneas que más figura en
              esta lista y uno de los vuelos más económicos para Miami ronda los
              450$. Mientras que un vuelo solo de ida los 290$
              <br />
              <br />
              Para viajar a EEUU desde Venezuela, sea Caracas o Valencia se debe
              comprar un boleto con escala en Republica Dominicana, México,
              Panamá o Bogotá.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="airlines-section">
            <div className="airlines-paragraph">
              <div>
                <h6>
                  Aerolíneas de Venezuela que realizan viajes Nacionales e
                  Internacionales
                </h6>
                <p>
                  Como bien mencionamos anteriormente, hay diferentes aerolíneas
                  en Venezuela que están operando en vuelos locales como
                  internacionales. Estas líneas aéreas son
                  <br />
                  <br />
                  <li>
                    Laser ( Panamá, Santo Domingo, Cancún, Bogotá, Miami y rutas
                    nacionales)
                  </li>
                  <br />
                  <li>
                    Avior (Santo Domingo, Cancún, Bogotá, y rutas nacionales)
                  </li>
                  <br />
                  <li>Rutaca (Trinidad y Tobago, Cancún, Santo Domingo)</li>
                  <br />
                  <li>
                    Conviasa (Buenos Aires, Cancún, Santo Domingo, Bolivia,
                    Guayaquil, Panamá, Los Roques, Italia, Rusia, Nicaragua,
                    Irán y Toluca, México){" "}
                  </li>
                  <br />
                  <li>
                    Estelar (Buenos Aires, Panamá, Republica Dominicana, Cancún
                    y Madrid)
                  </li>
                  <br />
                  <li>Albatros Airlines</li>
                  <br />
                  <br />
                  <span>Aerolíneas que viajan desde Colombia a Venezuela</span>
                  Las Líneas aéreas del vecino país que vuelan desde Bogotá son:
                  wingo, Avior, Laser y Copa Airlines con escala en Panamá.
                  <br />
                  <br />
                  Hay muchas aerolíneas importantes que cesaron sus operaciones
                  en Venezuela desde hace mucho tiempo como Aeroméxico,
                  Lufthansa, Air Canadá, Avianca, United Airlines, Delta
                  Airlines, entre otras. Más sin embargo esto no significa que
                  no puedas comprar un boleto con ellas ya que existen destinos
                  puentes como Aruba, República Dominicana, Panamá y Curazao que
                  nos facilitan adquirir un tiquete sin problema para algún
                  destino que cubran estas reconocidas líneas.
                  <br />
                  <br />
                  En FlyTravelGoo ofrecemos viajar a estos destinos puentes por
                  si tu destino final se encuentra en Canadá, algún país de
                  Europa, o alguna ciudad de EEUU aparte de Miami, por ejemplo
                  Nueva York, Chicago, Los Ángeles, etc.
                  <br />
                  <br />
                  <span>
                    Principales Aeropuertos Destinos de los vuelos
                    Internacionales desde Venezuela
                  </span>
                  <li>Aeropuerto Internacional de Miami</li>
                  <br />
                  <li>Aeropuerto de Tocumen (Panamá)</li>
                  <br />
                  <li>Aeropuerto Internacional de Barajas, Madrid</li>
                  <br />
                  <li>Aeropuerto el Dorado, Bogotá</li>
                  <br />
                  <li>
                    Aeropuerto Internacional Ezeiza, Buenos Aires, Argentina
                  </li>
                  <br />
                  <li>
                    Aeropuerto de Las Américas, Santo Domingo, República
                    Dominicana.
                  </li>
                  <br />
                  <li>Aeropuerto Internacional de Cancún</li>
                  <br />
                  <li>Aeropuertos Internacionales en Venezuela operativos</li>
                  <br />
                  <li>Aeropuerto Internacional de Maiquetía, (CCS)</li>
                  <br />
                  <li>Aeropuerto Internacional Arturo Michelena (VLN)</li>
                  <br />
                  <li>Aeropuerto Internacional de la Chinita (MAR)</li>
                  <br />
                  <li>
                    Aeropuerto Internacional General José Antonio Anzoátegui
                    (BLA)
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirlinesComponent;
