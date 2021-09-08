import styled from "styled-components";

export const Itinerary = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  .header {
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      display: block;
      padding: 1rem;
      font-size: ${({ theme }) => theme.fontSizes.regular}px;
      color: ${({ theme }) => theme.colors.white};
      text-align: center;
      flex: 1;
    }
  }

  .body {
    background-color: ${({ theme }) => theme.colors.white};
  }

  .item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
    &:last-child {
      border-bottom: 0;
    }
    span {
      display: block;
      padding: 2rem;
      flex: 1;
      border-right: 1px solid ${({ theme }) => theme.colors.grayLight};
      &:last-child {
        border-right: 0;
      }
    }
  }

  .airline {
    width: 35px;
    height: 16px;
    display: inline-block;
    margin-right: 2rem;
  }

  .code {
    color: ${({ theme }) => theme.colors.primary};
    display: block;
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.base}px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    display: inline-block;
  }

  .airline-name {
    color: ${({ theme }) => theme.colors.text};
    display: block;
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.regular}px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  .more {
    color: ${({ theme }) => theme.colors.text};
    display: block;
    margin: 0;
    margin-bottom: 0.5rem;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes.regular}px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  .hours {
    color: ${({ theme }) => theme.colors.three};
    display: block;
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.medium}px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  .city {
    color: ${({ theme }) => theme.colors.primary};
    display: block;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.body}px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  .airport {
    color: ${({ theme }) => theme.colors.text};
    display: block;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.regular}px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  .duration {
    color: ${({ theme }) => theme.colors.text};
    display: block;
    text-align: center;
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.medium}px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  .additional {
    padding: 2rem;
    h4 {
      display: block;
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.fontSizes.regular}px;
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      margin: 0;
      margin-bottom: 1rem;
    }
  }

  .select {
    background-color: white;
    outline: none;
    border: none;
    padding: 2rem;
    cursor: pointer;
    display: block;
    text-align: right;
    width: 100%;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.regular}px;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
