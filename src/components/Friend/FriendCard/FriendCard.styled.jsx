import styled from 'styled-components';

export const FriendCard = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

export const Status = styled.span`
  background-color: ${p => {
    return p.active ? p.theme.colors.green : p.theme.colors.red;
  }};
  width: 20px;
  height: 20px;
  border-radius: 50px;
`;

export const Image = styled.img`
  border-radius: 10px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
