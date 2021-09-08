import styled from "styled-components";

export const BookerContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  width: 80%;
  margin: 0 auto 2rem;
`;

export const BookerMenu = styled.div`
  display: flex;
  width: 30%;
  margin-bottom: 1rem;
`;

export const BookerPrevious = styled.div`
  width: 100%;
  justify-content: flex-start;
  text-align: left;
`;

export const BookerLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.base}px;
  padding: 1rem;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  margin-right: 2rem;
  ${(props) =>
    props.selected &&
    `color: #fe7700;
    font-weight: bold;`};
`;

export const BookerItems = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 70px;
  margin-bottom: 1rem;
`;

export const BookerItem = styled.div`
  background-color: ${(props) => props.theme.colors.white};
`;

export const BookerPort = styled.div`
  position: relative;
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid #ccc;
  height: 70px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1) inset;
`;

export const BookerPortIcon = styled.div`
  flex: 2;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 35px;
  }
`;

export const BookerPortSelect = styled.div`
  flex: 8;
  position: relative;
  padding: 24px 0;
  max-width: 80%;
  cursor: default;
`;

export const BookerPortInput = styled.input`
  width: 100%;
  padding: 0;
  position: absolute;
  top: 0;
  border: none;
  opacity: ${(props) => (props.focused ? "1" : "0")};
  z-index: 2;
  font-size: ${(props) => props.theme.fontSizes.large}px;
  transition: opacity 0.1s ease;
`;

export const BookerPortButton = styled.div`
  z-index: 1;
  padding: 0 4px;
  text-align: left;
`;

export const BookerPortLabel = styled.label`
  position: absolute;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.large}px;
  transition: all 0.3s ease;
  line-height: 1;
  z-index: 1;
  top: ${(props) => (props.focused ? "10px" : "28px")};
`;

export const BookerTrigger = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid #ccc;
  padding: 1rem;
  height: 50px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1) inset;
`;

export const BookerTriggerRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const BookerTriggerLabel = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSizes.xsmall}px;
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
    font-size: ${(props) => props.theme.fontSizes.base}px;
  }
`;

export const BookerSubmit = styled.a`
  background-color: ${(props) => props.theme.colors.three};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.xxlarge}px;
  i {
    padding-left: 8px;
  }
`;
