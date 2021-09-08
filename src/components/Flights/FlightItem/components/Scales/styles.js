import styled from "styled-components";

export const Scales = styled.div`
  height: 50px;
  width: 100px;
  position: relative;
  display: flex;
  justify-content: space-around;
  &:after {
    content: "";
    width: 100%;
    height: 1px;
    top: 50%;
    left: 0;
    position: absolute;
    background: ${({ theme }) => theme.colors.gray};
  }

  .stop {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.small}px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    span {
      width: 15px;
      height: 15px;
      margin-top: 4px;
      display: block;
      background: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.gray};
      border-radius: 15px;
      z-index: 2;
    }
  }

  .airline {
    width: 35px;
    height: 16px;
    margin-top: 1rem;
  }
`;
