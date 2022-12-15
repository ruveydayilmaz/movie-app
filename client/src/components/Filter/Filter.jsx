import React from 'react';
import styles from './Filter.module.css';
import { filterGenre, filterYear, sortBy } from '../../utils/filterData.json';

const Filter = () => {

    return (
        <div className={styles.filter}>
            <div className={styles.filter_container}>
                <div className={styles.filter__item}>
                    <label htmlFor="sort">Sort by</label>
                    <select name="sort" id="sort">
                        {sortBy.map((item, index) => {
                            return <option key={index} value={item.value}>{item.name}</option>
                        })}
                    </select>
                </div>
                <div className={styles.filter__item}>
                    <label htmlFor="year">Sort</label>
                    <select name="year" id="year">
                        <option value="ASC">Ascending</option>
                        <option value="DESC">Descending</option>
                    </select>
                </div>                
            </div>

            <div className={styles.filter__item}>
                <div className={styles.filter__year}>
                    <label htmlFor="year">Year</label>
                    <select name="year" id="year">
                        {filterYear.map((item, index) => {
                            return <option key={index} value={item.value}>{item.name}</option>
                        })}
                    </select>                    
                </div>

            </div>
            <div className={styles.genre_container}> 
                {
                    filterGenre.map((item, index) => {
                        return <label className={styles.genre}>
                                    <input key={index} type="checkbox" name="genre" value={item.value} />
                                    <span>{item.name}</span>
                               </label>
                    })                    
                }
            </div>
            <button className={styles.filter__button}>Apply</button>
        </div>
    )
}

export default Filter