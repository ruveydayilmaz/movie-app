import React from 'react';
import {Link} from "react-router-dom";
import styles from './UserMenu.module.css';

const UserMenu = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className={styles.userMenu}>
            {
                user ? (
                    <div className={styles.userMenu}>
                        <div className= {styles.user}></div>
                    </div>
                ) : (
                    <Link to="/auth">
                        <div className={styles.userMenu}>
                            <div className= {styles.user}></div>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

export default UserMenu