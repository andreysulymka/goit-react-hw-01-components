import PropTypes from 'prop-types';
import { Container, Card, Photo, List, Items, Username, InventorySpan} from './profile.styled';

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
    <p>@{tag}</p>
    <p>{location}</p>
  </Card>

  <List>
    <Items>
      <InventorySpan>Followers</InventorySpan>
      <span>{stats.followers}</span>
    </Items>
    <Items>
      <InventorySpan>Views</InventorySpan>
      <span >{stats.views}</span>
    </Items>
    <Items>
      <InventorySpan>Likes</InventorySpan>
      <span>{stats.likes}</span>
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