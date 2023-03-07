import PropTypes from 'prop-types';
import { List, Item, OnlineDot } from './FriendList.styled';
export { FriendList };
    

function FriendListItem({avatar, name, isOnline}) {
    return <Item >
        <OnlineDot isOnline={isOnline}>{isOnline}</OnlineDot>
        <img  src={avatar} alt="User avatar" width="48" />
        <p >{name}</p>
    </Item >
}

function FriendList ({ friends }) {
    return <List >
        {friends.map(fre =>
            <FriendListItem avatar={fre.avatar} name={fre.name} isOnline={fre.isOnline} key={fre.id} />
        )}
    </List >
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}