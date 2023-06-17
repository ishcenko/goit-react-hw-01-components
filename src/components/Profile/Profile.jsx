import PropTypes from 'prop-types';
import {
  ProfileWrap,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  ListItem,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrap>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <ListItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ListItem>
      </Stats>
    </ProfileWrap>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Profile;



// import React from 'react';

// const Profile = ({ username, tag, location, avatar, stats }) => {
//   return (
//     <div className="profile">
//       <div className="description">
//         <img
//           src={avatar}
//           alt="User avatar"
//           className="avatar"
//         />
//         <p className="name">{username}</p>
//         <p className="tag">@{tag}</p>
//         <p className="location">{location}</p>
//       </div>

//       <ul className="stats">
//         <li>
//           <span className="label">Followers</span>
//           <span className="quantity">{stats.followers}</span>
//         </li>
//         <li>
//           <span className="label">Views</span>
//           <span className="quantity">{stats.views}</span>
//         </li>
//         <li>
//           <span className="label">Likes</span>
//           <span className="quantity">{stats.likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Profile;
