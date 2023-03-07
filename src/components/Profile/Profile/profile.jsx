import PropTypes from 'prop-types';
import { Container, Card, Photo, List, Items, Username} from './profile.styled';

export { Profile };

function Profile({ avatar, username, tag, location, stats }) {
    return <>
        <Container>
  <Card>
    <Photo
      src={avatar}
      alt="User avatar"
      
    />
    <Username >{username}</Username>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </Card>

  <List>
    <Items>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </Items>
    <Items>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </Items>
    <Items>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </Items>
  </List>
</Container>
</>
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object
}