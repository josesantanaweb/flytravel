import styled from "styled-components";

export const BookerTriggerContainer = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: ${(props) =>
    props.typeTrip === "one-way" ? "center" : "space-between"};
  background-color: ${(props) => props.theme.colors.white};
  height: 65px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1) inset;
`;

export const BookerTriggerRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const BookerTriggerLabel = styled.span`
  text-align: ${(props) =>
    props.typeTrip === "one-way" ? "center" : "inherit"};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSizes.small}px;
  span {
    color: ${(props) => props.theme.colors.text};
    margin-left: 1rem;
  }
`;

export const BookerTriggerDate = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.xlarge}px;
  span {
    margin-left: 1rem;
    font-size: ${(props) => props.theme.fontSizes.regular}px;
  }
`;
