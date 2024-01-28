
import user from '../mock/user.json';
import data from '../mock/data.json';
import friend from '../mock/friends.json'
import Profile from './Profile';
import Statistics from 'components/Statistics';
import FriendList from './FriendList/FriendList';
import Transactions from '../mock/transactions.json';
import TransactionHistory from './TransactionHistory';



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
      

  <Statistics
    title="Upload stats"
    data={data}
      />
      
  <FriendList
    friend ={friend}  
  />

     <TransactionHistory items={Transactions} />; 

    </div>
  );
};

