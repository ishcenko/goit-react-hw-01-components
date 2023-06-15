// components/App.js
import React from 'react';
import user from './Profile/user.json';
import Profile from './Profile/Profile';

const App = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

export default App;
