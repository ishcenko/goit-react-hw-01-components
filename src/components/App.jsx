import user from './Profile/user.json';
import Profile from './Profile/Profile';

import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics';

import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList';

import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}






// // components/App.js
// import React from 'react';

// import user from './Profile/user.json';
// import Profile from './Profile/Profile';

// import friends from './FriendList/friends.json';
// import FriendList from './FriendList/FriendList';


// const Profile = () => {
//   return (
//     <div>
//       <h1>User Profile</h1>
//       <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//       />
//     </div>
//   );
// };

// // export default App;

// const FriendListItem = ({ avatar, name, isOnline }) => {
//   return (
//     <li className="item">
//       <span
//         className="status"
//         style={{ backgroundColor: friends.isOnline ? 'green' : 'red' }}
//       ></span>
//       <img className="avatar" src={friends.avatar} alt="User avatar" width="48" />
//       <p className="name">{friends.name}</p>
//     </li>
//   );
// };

// // export default FriendList;
