import PropTypes from 'prop-types';

export const FriendListItem = ({ item }) => {
  return (
    <div>
      <span class="status">{item.isOnline}</span>
      <img class="avatar" src={item.avatar} alt="User avatar" width="48" />
      <p class="name">{item.name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  item: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
