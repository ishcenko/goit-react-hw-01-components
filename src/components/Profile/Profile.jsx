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
  const statsArray = Array.isArray(stats) ? stats : [stats];

  return (
    <ProfileWrap>
      <Description>
        <Avatar src={avatar} alt={username} />
        <div>
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </div>
      </Description>

      <Stats>
        {statsArray.map((stat, index) => (
          <ListItem key={index}>
            <Label>Followers</Label>
            <Quantity>{stat.followers}</Quantity>
            <Label>Views</Label>
            <Quantity>{stat.views}</Quantity>
            <Label>Likes</Label>
            <Quantity>{stat.likes}</Quantity>
          </ListItem>
        ))}
      </Stats>
    </ProfileWrap>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      })
    ),
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  ]).isRequired,
};

export default Profile;
