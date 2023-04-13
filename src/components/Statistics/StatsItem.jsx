import PropTypes from 'prop-types';

export const StatsItem = ({ statItem }) => {
  return (
    <div class="item">
      <span class="label">{statItem.label}</span>
      <span class="percentage">{statItem.percentage}</span>
    </div>
  );
};

StatsItem.propTypes = {
  statItem: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
