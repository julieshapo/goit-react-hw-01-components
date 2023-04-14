import PropTypes from 'prop-types';
import { StatsList } from '../StatsList/StatsList';
import { StatsTitle } from '../StatsTitle/StatsTitle';
import { StatsSection } from './StatsSection.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      <StatsTitle title={title} />
      <StatsList stats={stats} />
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
