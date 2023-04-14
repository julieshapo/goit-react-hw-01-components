import PropTypes from 'prop-types';
import { Title } from './StatsTitle.styled';

export const StatsTitle = ({ title }) => {
  return <Title class="title">{title}</Title>;
};

StatsTitle.propTypes = {
  title: PropTypes.string,
};
