import React from "react";
import FriendListItem from "../FriendListItem/friendListItem";
import ListCSS from "../FriendList/friendList.module.css"

const FriendList = ({ friends }) => {
  return (
    <ul className={ListCSS.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={ListCSS.friendLi}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
