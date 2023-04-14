import PropTypes from 'prop-types';
import { StatsItem } from '../StatsItem/StatsItem';
import { List } from './StatsList.styled';

export const StatsList = ({ stats }) => {
  return (
    <List>
      {stats.map(statItem => (
        <li key={statItem.id}>
          <StatsItem statItem={statItem} />
        </li>
      ))}
    </List>
  );
};

StatsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
