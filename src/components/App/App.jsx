import { Profile } from 'components/Profile/Profile';
import user from '../Profile/user.json';
import { Statistics } from 'components/Statistics/StatsSection';
import data from '../Statistics/data.json';
import { FriendsList } from 'components/FriendList/FriendsList';
import friends from '../FriendList/friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from '../TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile item={user} />
      <Statistics title={data.title} stats={data} />
      <FriendsList items={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
