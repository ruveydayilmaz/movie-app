import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import styles from './Auth.module.css';
import { login, signin } from '../../actions/auth';
import * as types from '../../actions/types';

const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
};  

const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
    profilePic: yup.string(),
});

const Auth = () => {

    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading } = useSelector((state) => state.auth.loading);
    var { error } = useSelector((state) => state.auth);

    const { register, handleSubmit, formState } = useForm({
        validationSchema,
    });

    const { errors } = formState;

    const switchMode = () => {
        dispatch({ type: types.EVENT_RESET })
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const handleShowPassword = () => setShowPassword(!showPassword);

    const onSubmit = (data) => {
        dispatch({ type: types.EVENT_RESET })
        isSignup ? data : data = {email: data.email, password: data.password};
        isSignup ? dispatch(signin(data, navigate)) : dispatch(login(data, navigate));
    };

    return (
        <div className={styles.auth__container}>
            <div className={styles.auth__error}>
                {error && <p>{error}</p>}
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                {
                    isSignup && (
                        <div className={styles.auth__item}>
                            <label className={styles.auth__label} htmlFor="username">Username</label>
                            <input className={styles.auth__input} type="text" name="username" id="username" {...register("username")} />
                            <p className={styles.invalid}>{errors.username?.message}</p>
                        </div>
                    )
                }            
                <div className={styles.auth__item}>
                    <label className={styles.auth__label} htmlFor="email">Email</label>    
                    <input className={styles.auth__input} type="email" name="email" id="email" {...register("email")} />
                    <p className={styles.invalid}>{errors.email?.message}</p>
                </div>
                <div className={styles.auth__item}>
                    <label className={styles.auth__label} htmlFor="password">Password</label>
                    <input className={styles.auth__input} type={showPassword? "text" : "password"} name="password" id="password" {...register("password")} />
                    <i className={styles.auth__icon} onClick={handleShowPassword}> {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}</i>
                    <p className={styles.invalid}>{errors.password?.message}</p>
                </div>
                {
                    isSignup && (
                        <div className={styles.auth__item}>
                            <label className={styles.auth__label} htmlFor="confirmPassword">Confirm Password</label>
                            <input className={styles.auth__input} type="password" name="confirmPassword" id="confirmPassword" {...register("confirmPassword")} />        
                            <p className={styles.invalid}>{errors.confirmPassword?.message}</p>
                        </div>
                    )
                }
                <div className={styles.auth__item}>
                    <button
                        type="submit"
                        className={styles.submit}
                        disabled={loading}
                    >  
                        {loading ? "Loading..." : "Sign In"}
                    </button>
                </div>
            </form>
            <div className={styles.auth__item}>
                <button onClick={switchMode} className={styles.switch__button}>Don't have an account? Register</button>
            </div>
        </div>
    )
}

export default Auth