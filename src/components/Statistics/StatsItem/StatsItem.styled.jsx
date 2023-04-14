import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 20px;
  color: ${p => p.theme.colors.white};
  text-align: center;
  background-color: ${statItem => getRandomHexColor()};
  border-radius: 2px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Label = styled.span`
  font-size: 15px;
`;

export const Percentage = styled.span`
  font-size: 22px;
  font-weight: 500;
`;
