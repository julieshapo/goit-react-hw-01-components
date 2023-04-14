import PropTypes from 'prop-types';
import { FriendCard, Status, Image, Name } from './FriendCard.styled';

export const FriendListItem = ({ item }) => {
  return (
    <FriendCard>
      <Status class="status">{item.isOnline}</Status>
      <Image class="avatar" src={item.avatar} alt="User avatar" width="52" />
      <Name class="name">{item.name}</Name>
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
