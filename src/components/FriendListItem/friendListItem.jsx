import React from "react";
import ItemCSS from "../FriendListItem/friendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={ItemCSS.container}>
      <img className={ItemCSS.avatar} src={avatar} alt={`${name}'s avatar`} width="48" />
      <p className={ItemCSS.name}>{name}</p>
      <p className={`${ItemCSS.status} ${isOnline ? ItemCSS.online : ItemCSS.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
