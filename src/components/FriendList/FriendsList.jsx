import PropTypes from 'prop-types';
import { FriendListItem } from './FriendCard';

export const FriendsList = ({ items }) => {
  return (
    <ul class="friend-list">
      {items.map(item => (
        <li key={item.id}>
          <FriendListItem item={item} />
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
