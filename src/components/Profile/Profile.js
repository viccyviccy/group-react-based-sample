import React from 'react';
import design from './Profile.module.css';
// module css to enter here

const Profile = ({ user }) => (
  <div className={design.profile}>
    <div className={design.description}>
      <img src={user.avatar} alt="user avatar" className={design.user_img} />
      <p className={design.nick}>{user.name}</p>
      <p className={design.tag}>{user.tag}</p>
      <p className={design.location}>{user.location}</p>
    </div>
    <ul className={design.stats}>
      <li className={design.stats_li}>
        <span className={design.label}>Followers</span>
        <span className={design.quantity}>{user.stats.followers}</span>
      </li>
      <li className={design.stats_li}>
        <span className={design.label}>Views</span>
        <span className={design.quantity}>{user.stats.views}</span>
      </li>
      <li className={design.stats_li}>
        <span className={design.label}>Likes</span>
        <span className={design.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;
