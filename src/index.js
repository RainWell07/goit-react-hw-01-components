import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile  from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory'
import friends from './friends.json';
import user from './user.json';
import data from './data.json';
import transactions from './transactions.json';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  />
  <Statistics title="UPLOAD STATS" stats={data} />
  <FriendList friends={friends} />;
  <TransactionHistory items={transactions} />;
  </React.StrictMode>
);
