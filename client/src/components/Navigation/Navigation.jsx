import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import SecondaryNavigation from '../SecondaryNavigation/SecondaryNavigation';
import logoIcon from '../../assets/logo.png';

const Navigation = () => {
    const [backgroundColor, setBackgroundColor] = useState('transparent');

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 50) {
                setBackgroundColor('#13121fc5');
            } else {
                setBackgroundColor('transparent');
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={styles.navigation} style={{backgroundColor}}>
            <div className={styles.mainNavigation}>
                <NavLink to="/" className={styles.logo}>
                    <img className={styles.logo} src={logoIcon} alt="logo" />
                </NavLink>
                <NavLink to="/" className={styles.link}>Main</NavLink>
                <NavLink to="/movies" className={styles.link}>Movies</NavLink>
                <NavLink to="/shows" className={styles.link}>Shows</NavLink>
            </div>
            <SecondaryNavigation />
        </div>
    )
}

export default Navigation;
