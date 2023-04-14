import styled from 'styled-components';

export const List = styled.ul`
  background-color: ${p => p.theme.colors.white};
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;

export const ListItem = styled.li`
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 0px 3px 20px 2px rgba(0, 0, 0, 0.2);
`;
