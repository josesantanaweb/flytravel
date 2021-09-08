import styled from "styled-components";

export const BookerCabinContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  padding: 1rem;
  height: 65px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1) inset;
`;

export const BookerCabinRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

export const BookerCabinLabel = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSizes.regular}px;
  span {
    color: ${(props) => props.theme.colors.primary};
    margin-left: 1rem;
  }
`;

export const BookerCabinClass = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.base}px;
  span {
    color: ${(props) => props.theme.colors.text};
    margin-left: 1rem;
    font-size: ${(props) => props.theme.fontSizes.regular}px;
  }
`;

export const BookerCabinPersonsQty = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.medium}px;
  text-align: center;
`;

export const BookerCabinPersons = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`;

export const BookerCabinPaxes = styled.div`
  width: 350px;
  background: ${(props) => props.theme.colors.white};
  position: absolute;
  top: 110%;
  padding: 2rem;
  border-radius: 0 0 5px 5px;
  right: 0;
  display: ${(props) => (props.showcabin ? "block" : "none")};
`;

export const BookerCabinPaxesTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin: 0;
  margin-bottom: 2rem;
  font-size: ${(props) => props.theme.fontSizes.base}px;
`;

export const BookerCabinPaxesRow = styled.div``;

export const BookerCabinPaxesClass = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const BookerCabinPaxesPerson = styled.h4`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.regular}px;
`;

export const BookerCabinPaxesAge = styled.span`
  color: ${(props) => props.theme.colors.text};
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.small}px;
`;

export const BookerCabinPaxesItems = styled.div``;

export const BookerCabinPaxesItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.grayLight};
`;

export const BookerCabinPaxesControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BookerCabinPaxesAdd = styled.span`
  color: ${(props) => props.theme.colors.white};
  margin: 0;
  width: 30px;
  height: 30px;
  text-align: center;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.grayLight : props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.base}px;
  display: block;
  line-height: 30px;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const BookerCabinPaxesRemove = styled(BookerCabinPaxesAdd)``;

export const BookerCabinPaxesQty = styled.span`
  color: ${(props) => props.theme.colors.text};
  width: 50px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.regular}px;
`;

export const BookerCabinPaxesMore = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.regular}px;
  display: block;
  text-align: center;
  margin-top: 2rem;
`;
