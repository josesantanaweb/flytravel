import styled from "styled-components";

export const Segment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .container-buttons {
    justify-content: space-between;
  }

  .container-price {
    align-self: center;
    text-align: center;
  }

  .person {
    display: block;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.small}px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    margin: 0;
    margin-bottom: 0.5rem;
  }

  .price {
    color: ${({ theme }) => theme.colors.secondary};
    display: block;
    margin: 0;
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.medium}px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
`;
