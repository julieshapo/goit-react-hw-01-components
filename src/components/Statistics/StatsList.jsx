import PropTypes from 'prop-types';
import { StatsItem } from './StatsItem';

export const StatsList = ({ stats }) => {
  return (
    <ul class="stat-list">
      {stats.map(statItem => (
        <li key={statItem.id}>
          <StatsItem statItem={statItem} />
        </li>
      ))}
    </ul>
  );
};

StatsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
