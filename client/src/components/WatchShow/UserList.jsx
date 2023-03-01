import React, { useRef, useState, useEffect } from 'react';

import styles from './WatchShow.module.css';
import NavBar from './NavBar';

const UserList = ({users, setUserListOpen}) => {

  return (
    <div className={styles.users__div}>
      <NavBar setUserListOpen={setUserListOpen} />
      <p>users</p>
      <ul>
          {users?.length > 0 && users?.map(item => (
          <li key={item.chatUser.id} className={styles.users__item}>
              <img src={item.chatUser && item.chatUser.profilePic} alt='profile'/>
              <p>{item.chatUser && item.chatUser.username}</p>
          </li>
          ))}
      </ul>
    </div>
  );
}

export default UserList;
