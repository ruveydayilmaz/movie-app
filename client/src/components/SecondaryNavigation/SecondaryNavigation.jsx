import React from 'react';
import styles from './SecondaryNavigation.module.css';
import Search from '../Search'
import Notifications from '../Notifications'
import UserMenu from '../UserMenu'

const SecondaryNavigation = () => {

    return (
        <div className={styles.secondaryNavigation}>
            <div className={styles.navItem}>
                <Search />                
            </div>
            <div className={styles.navItem}>
                Kids               
            </div>
            <div className={styles.navItem}>
                <Notifications />                
            </div>
            <div className={styles.navItem}>
                <UserMenu />            
            </div>
        </div>
    )
}

export default SecondaryNavigation