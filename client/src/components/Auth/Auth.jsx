import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styles from './Auth.module.css';

const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
};  

const Auth = () => {

    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
        <div className={styles.auth__container}>
            {
                isSignup && (
                    <div className={styles.auth__item}>
                        <label className={styles.auth__label} htmlFor="username">Username</label>
                        <input className={styles.auth__input} type="text" name="username" id="username" />
                    </div>
                )
            }            
            <div className={styles.auth__item}>
                <label className={styles.auth__label} htmlFor="email">Email</label>    
                <input className={styles.auth__input} type="email" name="email" id="email" />
            </div>
            <div className={styles.auth__item}>
                <label className={styles.auth__label} htmlFor="password">Password</label>
                <input className={styles.auth__input} type="password" name="password" id="password" />
            </div>
            {
                isSignup && (
                    <div className={styles.auth__item}>
                        <label className={styles.auth__label} htmlFor="confirmPassword">Confirm Password</label>
                        <input className={styles.auth__input} type="password" name="confirmPassword" id="confirmPassword" />
                        <i className={styles.auth__icon} onClick={handleShowPassword}> {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>} </i>
                    </div>
                )
            }
            <div className={styles.auth__item}>
                <Link to="/">
                   <button className={styles.auth__button}>Login</button> 
                </Link>
            </div>
            <div className={styles.auth__item}>
                <button onClick={switchMode} className={styles.switch__button}>Don't have an account? Register</button>
            </div>
        </div>
    )
}

export default Auth