import PropTypes from 'prop-types';
import { List} from './FriendList.styled';
import { FriendListItem } from './FriendListItem';
export { FriendList };

    



function FriendList ({ friends }) {
    return <List >
        {friends.map(fre =>
            <FriendListItem avatar={fre.avatar} name={fre.name} isOnline={fre.isOnline} key={fre.id} />
        )}
    </List >
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}