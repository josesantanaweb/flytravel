import styled from "styled-components";

export const Item = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  .card-group {
    display: grid;
    grid-template-columns: 2fr 320px;
    grid-gap: 2rem;
  }

  .card {
    width: 100%;
    height: 120px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.medium};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
  }

  .duration {
    display: block;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.small}px;
    margin-bottom: 0.5rem;
  }

  .time {
    display: block;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.regular}px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: 0.5rem;
  }

  .details {
    display: block;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.regular}px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: 0;
    cursor: pointer;
  }
`;
