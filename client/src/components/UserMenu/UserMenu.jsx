import React from 'react';
import {Link} from "react-router-dom";
import styles from './UserMenu.module.css';
import { useDispatch } from "react-redux";
import * as types from '../../actions/types';

const UserMenu = () => {

    const dispatch = useDispatch();
    var profile = JSON.parse(localStorage.getItem('profile'));

    const logout = () => {
        dispatch({ type: types.LOGOUT });
    };

    return (
        <div className={styles.userMenu}>
            {
                profile ? (
                    <div className={styles.userMenu}>
                        <img className= {styles.user} src={profile.user.profilePic} />
                        <button onClick={logout} className={styles.logout}>Logout</button>
                    </div>
                ) : (
                    <Link to="/auth">
                        <div className={styles.userMenu}>
                            <div className= {styles.user}></div>
                        </div>
                        <button className={styles.logout}>Login</button>
                    </Link>
                )
            }
        </div>
    )
}

export default UserMenu