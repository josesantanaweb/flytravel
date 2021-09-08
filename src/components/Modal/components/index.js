import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
  width: ${(props) =>
    props.width
      ? props.width.includes("%")
        ? props.width
        : `${props.width}px`
      : "80%"};
  height: auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
`;
