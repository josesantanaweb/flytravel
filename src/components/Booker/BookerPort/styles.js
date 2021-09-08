import styled from "styled-components";

export const BookerPortContainer = styled.div`
  position: relative;
  display: flex;
  height: 65px;
  padding: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1) inset;
  background-color: ${(props) => props.theme.colors.white};
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
  max-width: 80%;
  cursor: default;
`;

export const BookerPortButton = styled.div`
  z-index: 1;
  padding: 0 4px;
  text-align: left;
`;

export const BookerPortLabel = styled.label`
  position: absolute;
  transition: all 0.3s ease;
  line-height: 1;
  z-index: 1;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) =>
    props.focused ? props.theme.colors.secondary : props.theme.colors.primary};
  font-size: ${(props) =>
    props.focused
      ? props.theme.fontSizes.small
      : props.theme.fontSizes.medium}px;
  top: ${(props) => (props.focused ? "-3px" : "14px")};
`;

export const BookerPortText = styled.span`
  transition: all 0.3s ease;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.small}px;
  display: block;
  width: 130px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  position: absolute;
  bottom: -5px;
  z-index: 2;
`;
