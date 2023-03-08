import { Item, OnlineDot } from './FriendList.styled';
import PropTypes from 'prop-types';
export {FriendListItem}

function FriendListItem({ avatar, name, isOnline }) {
    return <Item >
        <OnlineDot isOnline={isOnline}>{isOnline}</OnlineDot>
        <img  src={avatar} alt="User avatar" width="48" />
        <p >{name}</p>
    </Item >
}



FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
};