import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px 0;
  background-color: ${p => p.theme.colors.lightGray};
`;

export const Table = styled.table`
  margin: 0 auto;
  width: 600px;
  background-color: ${p => p.theme.colors.lightGray};
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead`
  background-color: ${p => p.theme.colors.lightBlue};
  color: ${p => p.theme.colors.white};
  height: 30px;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.gray};
  text-align: center;
`;

export const Row = styled.tr`
  height: 30px;
  text-transform: capitalize;
  background-color: ${p =>
    p.even ? p.theme.colors.white : p.theme.colors.lightGray};
`;
