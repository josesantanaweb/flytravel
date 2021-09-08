import styled from "styled-components";

export const AutoCompleteContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  position: relative;
  /* background-color: blue; */
`;

export const AutoCompleteInput = styled.input`
  width: 90%;
  padding: 0.5rem 0;
  /* position: absolute; */
  border: none;
  outline: none;
  z-index: 2;
  text-transform: capitalize;
  transition: opacity 0.1s ease;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.medium}px;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  opacity: ${(props) => (props.focused ? "1" : "0")};
`;

export const AutoCompleteOptions = styled.div`
  background-color: white;
  position: absolute;
  left: -46px;
  top: 120%;
  z-index: 2;
  width: 320px;
  flex-direction: column;
`;

export const AutoCompleteOption = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  outline: none;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
  i {
    margin-right: 1rem;
  }
`;
export const AutoCompleteCountry = styled.span`
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.grayDark};
  font-style: italic;
`;
export const AutoCompleteAirport = styled.span`
  text-transform: capitalize;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin-right: 0.5rem;
`;

export const AutoCompleteIata = styled(AutoCompleteAirport)`
  font-weight: ${(props) => props.theme.fontWeights.regular};
  margin-right: 0.5rem;
`;
export const AutoCompleteCity = styled(AutoCompleteIata)``;
