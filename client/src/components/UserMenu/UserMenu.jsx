import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import styles from './UserMenu.module.css';
import { useDispatch } from "react-redux";
import * as types from '../../actions/types';
import loginIcon from '../../assets/login.png';
import logoutIcon from '../../assets/logout.png';

const UserMenu = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    var profile = JSON.parse(localStorage.getItem('profile'));

    const logout = () => {
        dispatch({ type: types.LOGOUT });
        navigate('/auth');
    };

    return (
        <div>
            {
                profile ? (
                    <div className={styles.user__menu}>
                        <img className={styles.user__image} src={profile.user?.profilePic} />
                        <button onClick={logout} className={styles.menu__logout}>
                            <img src={logoutIcon} alt='login'/>
                        </button>
                    </div>
                ) : (
                    <Link to="/auth">
                        <button className={styles.menu__login}>
                            <img src={loginIcon} alt='login'/>
                        </button>
                    </Link>
                )
            }
        </div>
    )
}

export default UserMenu