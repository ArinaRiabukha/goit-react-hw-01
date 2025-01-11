import React from "react";
import ProfileCSS from "./profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={ProfileCSS.container}>
      <div>
        <img className={ProfileCSS.image} src={image} alt="User avatar" />
        <p className={ProfileCSS.name}>{name}</p>
        <p className={ProfileCSS.personinf}>@{tag}</p>
        <p className={ProfileCSS.personinf}>{location}</p>
      </div>
      <ul className={ProfileCSS.statcontainer}>
        <li className={ProfileCSS.statli}>
          <span className={ProfileCSS.statdef}>Followers</span>
          <span className={ProfileCSS.stat}>{stats.followers}</span>
        </li>
        <li className={ProfileCSS.statli}>
          <span className={ProfileCSS.statdef}>Views</span>
          <span className={ProfileCSS.stat}>{stats.views}</span>
        </li>
        <li className={ProfileCSS.statli}>
          <span className={ProfileCSS.statdef}>Likes</span>
          <span className={ProfileCSS.stat}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;