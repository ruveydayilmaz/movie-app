import React from 'react';
import styles from './Filter.module.css';

const Filter = () => {  // i'll refactor this later, todo: add objects and map them

    const sortBy = [
        {value: 'popularity.asc', name: 'Popularity'},
        {value: 'release_date.asc', name: 'Release Date'},
        {value: 'revenue.asc', name: 'Revenue'},
        {value: 'primary_release_date.asc', name: 'Primary Release Date'},
        {value: 'original_title.asc', name: 'Original Title'},
        {value: 'vote_average.asc', name: 'Vote Average'},
        {value: 'vote_count.desc', name: 'Vote Count'}
    ];
    
    const filterYear = [
        {value: '2019', name: '2019'},
        {value: '2018', name: '2018'},
        {value: '2017', name: '2017'},
        {value: '2016', name: '2016'},
        {value: '2015', name: '2015'},
        {value: '2014', name: '2014'},
        {value: '2013', name: '2013'},
        {value: '2012', name: '2012'},
        {value: '2011', name: '2011'},
        {value: '2010', name: '2010'},
        {value: '2009', name: '2009'},
        {value: '2008', name: '2008'},
        {value: '2007', name: '2007'},
        {value: '2006', name: '2006'},
        {value: '2005', name: '2005'},
        {value: '2004', name: '2004'},
        {value: '2003', name: '2003'},
        {value: '2002', name: '2002'},
        {value: '2001', name: '2001'},
        {value: '2000', name: '2000'},
        {value: '1999', name: '1999'}
    ];

    const filterGenre = [
        {value: '28', name: 'Action'},
        {value: '12', name: 'Adventure'},
        {value: '16', name: 'Animation'},
        {value: '35', name: 'Comedy'},
        {value: '80', name: 'Crime'},
        {value: '99', name: 'Documentary'},
        {value: '18', name: 'Drama'},
        {value: '10751', name: 'Family'},
        {value: '14', name: 'Fantasy'},
        {value: '36', name: 'History'},
        {value: '27', name: 'Horror'},
        {value: '9648', name: 'Mystery'},
        {value: '10749', name: 'Romance'},
        {value: '878', name: 'Science Fiction'},
        {value: '53', name: 'Thriller'},
        {value: '37', name: 'Western'}
    ];

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