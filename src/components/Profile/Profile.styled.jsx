import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${p => p.theme.colors.lightGray};
  padding: 60px;
`;

export const ProfileCard = styled.div`
  background-color: ${p => p.theme.colors.white};
  margin: 0 auto;
  width: 200px;
  border: 1px solid ${p => p.theme.colors.lightGray};
  border-radius: 4px;
  text-align: center;
  box-shadow: 0px 3px 20px 2px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.div``;

export const Avatar = styled.img`
  border: 1px solid ${p => p.theme.colors.lightGray};
  border-radius: 50%;
  margin: 20px auto;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Details = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  color: ${p => p.theme.colors.gray};
  font-weight: 500;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  background-color: ${p => p.theme.colors.lightGray};
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.gray};
`;

export const Quantity = styled.span`
  font-weight: 500;
  color: ${p => p.theme.colors.black};
`;
