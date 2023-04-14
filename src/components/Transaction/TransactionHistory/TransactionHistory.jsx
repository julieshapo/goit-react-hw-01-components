import PropTypes from 'prop-types';
import { TransactionOperation } from '../TransactionOperation/TransactionOperation';
import {
  Container,
  Row,
  Table,
  TableBody,
  TableHead,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <Table>
        <TableHead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </TableHead>

        <TableBody>
          {items.map((item, idx) => (
            <Row even={idx % 2 === 0} key={item.id}>
              <TransactionOperation item={item} />
            </Row>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

TransactionHistory.propsTypes = {
  items: PropTypes.arrayOf({
    key: PropTypes.string.isRequired,
  }).isRequired,
};
