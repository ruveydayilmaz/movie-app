import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import logo from './assets/logo.png';
import SecondaryNavigation from '../SecondaryNavigation/SecondaryNavigation';

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.mainNavigation}>
                {/* <NavLink to="/" className={styles.logo}>
                    <img className={styles.logo} src={logo} alt="logo" />
                </NavLink> */}
                <NavLink to="/" className={styles.link}>Main</NavLink>
                <NavLink to="/movies" className={styles.link}>Movies</NavLink>
                <NavLink to="/shows" className={styles.link}>Shows</NavLink>
            </div>
            <SecondaryNavigation />
        </div>
    )
}

export default Navigation