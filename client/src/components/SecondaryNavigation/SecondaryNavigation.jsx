import React from 'react';
import styles from './SecondaryNavigation.module.css';
import Search from '../Search/Search'
import Notifications from '../Notifications/Notifications'
import UserMenu from '../UserMenu/UserMenu'

const SecondaryNavigation = () => {

    var profile = JSON.parse(localStorage.getItem('profile'));

    return (
        <div className={styles.secondary__navigation}>
            <div className={styles.nav__item && styles.search__item}>
                <Search />                
            </div>
            {
                profile && (
                    <div className={styles.nav__item}>
                        <Notifications />                
                    </div>                    
                )
            }
            <div className={styles.nav__item}>
                <UserMenu />            
            </div>
        </div>
    )
}

export default SecondaryNavigation