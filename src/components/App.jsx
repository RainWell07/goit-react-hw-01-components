import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import friends from '../friends.json';
import user from '../user.json';
import data from '../data.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#010101',
      }}
    >
         <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="UPLOAD STATS" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>
  );
};
