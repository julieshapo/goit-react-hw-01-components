import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './StatsItem.styled';

export const StatsItem = ({ statItem }) => {
  return (
    <Item>
      <Label>{statItem.label}</Label>
      <Percentage>{statItem.percentage}%</Percentage>
    </Item>
  );
};

StatsItem.propTypes = {
  statItem: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
