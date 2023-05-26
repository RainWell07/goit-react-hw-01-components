import React from "react";
import PropTypes from 'prop-types';


const FriendList = ({ friends }) => {
    return (
    <ul className="friend-list-online">
    {friends.map((friend) => (
    <FriendListItem key={friend.id} {...friend} />
    ))}
    </ul>
);
};

FriendList.propTypes = {
friends: PropTypes.arrayOf(
PropTypes.shape({
id: PropTypes.number.isRequired,
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired,
})
).isRequired,
};


const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className="item-friends">
    <img className="avatar-friends" src={avatar} alt="User avatar" width="48" />
    <p className="name-friends">{name}</p>
    <div className="isOnline">
      <span className={`status-friends${isOnline ? '-online' : '-offline'}`}>
        <svg className="status-friends" height="20" width="20">
          <circle
            cx="10"
            cy="10"
            r="5"
            fill={isOnline ? "green" : "red"}
          />
        </svg>
      </span>
    </div>
  </li>

  )
}

FriendListItem.propTypes = {
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
