import React from 'react';
import styles from './Navigation.module.css';
import logo from './assets/logo.png';
import SecondaryNavigation from '../SecondaryNavigation';

const Navigation = () => {
    const navItems = [
        'TV Shows',
        'Movies',
        'New & Popular',
        'My List'
    ]

    return (
        <div className={styles.navigation}>
            <div className={styles.mainNavigation}>
                <img className={styles.logo} src={logo} alt="logo" />
                <ul className={styles.navigationList}>
                    <li className={styles.currentItem}>
                        <a href="/">Home</a> 
                    </li>                    
                    {navItems.map((item) => (
                        <li className={styles.navigationItem} key={item}>
                            <a href="/">{item}</a> 
                        </li>
                    ))}
                </ul>
            </div>
            <SecondaryNavigation />
        </div>
    )
}

export default Navigation