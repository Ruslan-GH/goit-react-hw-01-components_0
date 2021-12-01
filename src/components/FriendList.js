import FriendListItem from './FriendListItem';
import propTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({ id: propTypes.number.isRequired }),
  ),
};

export default FriendList;

//  {friends.map(friend => (
//     <li key={friend.id}>
//         <FriendListItem
//             avatar={friend.avatar}
//             name={friend.name}
//             isOnline={friend.isOnline}
//         />
//     </li>
// ))
