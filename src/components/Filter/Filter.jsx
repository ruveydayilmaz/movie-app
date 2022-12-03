import React from 'react';
import styles from './Filter.module.css';

const Filter = () => {  // i'll refactor this later, todo: add objects and map them

    return (
        <div className={styles.filter}>
            <div className={styles.filter__item}>
                <label htmlFor="sort">Sort by</label>
                <select name="sort" id="sort">
                    <option value="popularity.asc">Popularity</option>
                    <option value="release_date.asc">Release Date</option>
                    <option value="revenue.asc">Revenue</option>
                    <option value="primary_release_date.asc">Primary Release Date</option>
                    <option value="original_title.asc">Original Title</option>
                    <option value="vote_average.asc">Vote Average</option>
                    <option value="vote_count.desc">Vote Count</option>
                </select>
            </div>
            <div className={styles.filter__item}>
                <label htmlFor="year">Sort</label>
                <select name="year" id="year">
                    <option value="ASC">Ascending</option>
                    <option value="DESC">Descending</option>
                </select>
            </div>
            <div className={styles.filter__item}>
                <label htmlFor="year">Year</label>
                <select name="year" id="year">
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                </select>
            </div>
            <div className={styles.filter__item}>
                <label htmlFor="genre">Genre</label>
                <label>
                    <input type="checkbox" name="genre" value="28" />
                    <span>Action</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="12" />
                    <span>Adventure</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="16" />
                    <span>Animation</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="35" />
                    <span>Comedy</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="80" />
                    <span>Crime</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="99" />
                    <span>Documentary</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="18" />
                    <span>Drama</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="10751" />
                    <span>Family</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="14" />
                    <span>Fantasy</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="36" />
                    <span>History</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="27" />
                    <span>Horror</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="10402" />
                    <span>Music</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="9648" />
                    <span>Mystery</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="10749" />
                    <span>Romance</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="878" />
                    <span>Science Fiction</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="10770" />
                    <span>TV Movie</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="53" />
                    <span>Thriller</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="10752" />
                    <span>War</span>
                </label>
                <label>
                    <input type="checkbox" name="genre" value="37" />
                    <span>Western</span>
                </label>
            </div>
            <button className={styles.filter__button}>Apply</button>
        </div>
    )
}

export default Filter