import React from "react";
import Container from "components/Container";
import { 
  BookNavContainer,
  BookSteps,
  BookStep,
} from './styles';

const BookNav = () => {
  return (
    <BookNavContainer>
      <Container>
        <BookSteps>
          <BookStep isActive>
            <img src="../images/plane_round-white.png" />
            Seleccionar Vuelo
          </BookStep>
          <BookStep>
            <img src="../images/plane_round-white.png" />
            Detalles Del Pasajero
          </BookStep>
          <BookStep>
            <img src="../images/plane_round-white.png" />
            Servicios Adicionales
          </BookStep>
          <BookStep>
            <img src="../images/plane_round-white.png" />
            Pago
          </BookStep>
        </BookSteps>
      </Container>
    </BookNavContainer>
  );
};

export default BookNav;
