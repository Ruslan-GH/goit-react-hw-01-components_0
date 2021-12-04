import FriendListItem from './FriendListItem';
import propTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendList = ({ friends }) => {
  const isOnline = true;
  return (
    <ul className={s.friendList}>
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
