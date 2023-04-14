import { Profile } from 'components/Profile/Profile';
import user from '../Profile/user.json';
import { Statistics } from 'components/Statistics/StatsSection';
import data from '../Statistics/data.json';
import { FriendsList } from 'components/Friend/FriendsList/FriendsList';
import friends from '../Friend/friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from '../TransactionHistory/transactions.json';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <Profile item={user} />
      <Statistics title={data.title} stats={data} />
      <FriendsList items={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
