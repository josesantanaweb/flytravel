import styled from "styled-components";

export const BookNavContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  margin-top: 7px;
`;

export const BookSteps = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const BookStep = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 0px 0 50px;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.body}px;
  height: 70px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.secondary : props.theme.colors.primary};
  img {
    width: 30px;
    margin-right: 1rem;
  }

  ${({ isActive }) =>
    isActive &&
    `
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 35px 0px 34px 40px;
      border-color: transparent transparent transparent #000041;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: -30px;
      z-index: 2;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 32px 0px 38px 30px;
      border-color: transparent transparent transparent #FE7700;
    }
  `}
`;
