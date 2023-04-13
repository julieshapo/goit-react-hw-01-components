import PropTypes from 'prop-types';

export const StatsTitle = ({ title }) => {
  return <h2 class="title">{title}</h2>;
};

StatsTitle.propTypes = {
  title: PropTypes.string,
};
