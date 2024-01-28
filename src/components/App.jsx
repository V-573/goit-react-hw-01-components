
import user from '../mock/user.json';
import data from '../mock/data.json';
import friend from '../mock/friends.json'
import Profile from './Profile';
import Statistics from 'components/Statistics';
import FriendList from './FriendList/FriendList';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
  overflow-y: auto; /* Agrega un scroll vertical cuando el contenido excede la altura de la ventana */
`;

export const App = () => {
  return (
     <AppContainer
    
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
      

  <Statistics
    title="Upload stats"
    data={data}
      />
      
  <FriendList
    friend ={friend}  
  />

      

    </AppContainer>
  );
};

