import styled from "styled-components";

export const DaySelectedContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .prev-day,
  .next-day {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.three};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    cursor: pointer;
  }

  .day {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.regular}px;
    cursor: pointer;
    padding: 1rem;
    height: 40px;
    flex: 1;
    text-align: center;
    line-height: 20px;
    &:hover {
      background-color: #00007f;
    }
  }
  .selected {
    background-color: #dc000f;
  }
`;
