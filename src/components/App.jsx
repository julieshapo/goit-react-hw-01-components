import user from '../user.json'
import UserCard from './User'


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
      < UserCard
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    </div>
  );
};


// export function App() {
//   return <div
//         style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//   >
//     < UserCard
//       avatar={data.avatar}
//       username={data.username}
//       tag={data.tag}
//       location={data.location}
//       followers={data.stats.followers}
//       views={data.stats.views}
//       likes={data.stats.likes}
//     />
//   </div>
// }


 