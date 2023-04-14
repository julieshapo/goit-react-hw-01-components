import PropTypes from 'prop-types';
import { FriendCard, Status, Image, Name } from './FriendCard.styled';

export const FriendListItem = ({ item: { isOnline, avatar, name } }) => {
  console.log(isOnline);
  return (
    <FriendCard>
      <Status active={isOnline === true}>{isOnline}</Status>
      <Image src={avatar} alt="User avatar" width="52" />
      <Name>{name}</Name>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  item: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
