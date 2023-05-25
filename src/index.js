import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile  from 'components/Profile';
import user from './user.json';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
 />
  </React.StrictMode>
);
