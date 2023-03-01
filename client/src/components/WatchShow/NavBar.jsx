import React, { useRef, useState, useEffect } from 'react';

import styles from './WatchShow.module.css';
import messageIcon from '../../assets/message.png'
import peopleIcon from '../../assets/people.png'
import leftArrowIcon from '../../assets/left-arrow.png'
import rightArrowIcon from '../../assets/right-arrow.png'

const NavBar = ({setUserListOpen}) => {

  return (
    <div>
      <img onClick={() => setUserListOpen(false)} src={messageIcon} alt="message" />
      <img onClick={() => setUserListOpen(true)} src={peopleIcon} alt="people" />
    </div>
  );
}

export default NavBar;
