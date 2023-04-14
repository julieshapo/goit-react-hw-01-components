import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendCard/FriendCard';
import { List, ListItem } from './FriendsList.styled';

export const FriendsList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <FriendListItem item={item} />
        </ListItem>
      ))}
    </List>
  );
};

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
