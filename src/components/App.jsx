import data from '../user.json'
import User from './Profile'


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      < User
      avatar={data.avatar}
      username={data.username}
      tag={data.tag}
      location={data.location}
      followers={data.stats.followers}
      views={data.stats.views}
      likes={data.stats.likes}
    />
    </div>
  );
};




 