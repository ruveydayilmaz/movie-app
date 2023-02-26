import React from 'react';
import styles from './Search.module.css';
import searchIcon from '../../assets/search.png';

const Search = () => {

    return (
        <div className={styles.search__bar}>
            <input className={styles.search__input} />
            <img className={styles.search__icon} src={searchIcon} alt='search'/>
        </div>
    )
}

export default Search