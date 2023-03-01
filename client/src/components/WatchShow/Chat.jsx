import React, { useRef, useState, useEffect } from 'react';

import styles from './WatchShow.module.css';
import NavBar from './NavBar';

const Chat = ({handleSubmit, message, setMessage, receivedMessages, setUserListOpen}) => {

  return (
    <div className={styles.chat__div}>
      <NavBar setUserListOpen={setUserListOpen} />
      <ul>
        {
          receivedMessages.length === 0 ? (
            <div>
              <p>Write a message to people who are also watching this!</p>
            </div>
          ) :
          receivedMessages.map((item, index) => {
            return (
              <li key={index}>
                <img src={item.user && item.user.profilePic} alt='profile'/>
                <div>
                  <p className={styles.chat__username}>{item.user && item.user.username}</p>   
                  <p className={styles.chat__message}>{item.message}</p>
                </div>
              </li>   
            )
          })
        }        
      </ul>
      <form className={styles.chat__form} onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
