import styled from "styled-components";

export const Segment = styled.div`
  .hours {
    color: ${({ theme }) => theme.colors.primary};
    display: block;
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.medium}px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  .city {
    color: ${({ theme }) => theme.colors.text};
    display: block;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.regular}px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  .iata {
    margin: 0;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;
