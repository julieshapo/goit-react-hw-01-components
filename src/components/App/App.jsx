import { Profile } from 'components/Profile/Profile';
import user from '../Profile/user.json';
import { Statistics } from 'components/Statistics/StatsSection';
import data from '../Statistics/data.json';

export const App = () => {
  return (
    <>
      <Profile item={user} />
      <Statistics title={data.title} stats={data} />
    </>
  );
};
