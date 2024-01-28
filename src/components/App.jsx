
import user from '../mock/user.json';
import Profile from './Profile';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection:'column',
      }}
    >
     


<Profile // aca invoco mi componente Profile y le envio los props (username, tag, loaction, avatar, stats)
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>


    </div>
  );
};

