import PropTypes from 'prop-types';
import { StatsList } from './StatsList';
import { StatsTitle } from './StatsTitle';

export const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      <StatsTitle title={title} />
      <StatsList stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
