import PropTypes from 'prop-types';
import { TransactionOperation } from './TransactionOperation';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <TransactionOperation item={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propsTypes = {
  items: PropTypes.arrayOf({
    key: PropTypes.string.isRequired,
  }).isRequired,
};
