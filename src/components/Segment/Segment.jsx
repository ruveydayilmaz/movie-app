import React from 'react';
import styles from './Segment.module.css';
import ChevronRightIcon from './ChevronRightIcon';
import placeholderImg from './assets/thumbnail-top10-h.jpg';
import p1 from './assets/p1.jpg';
import p2 from './assets/p2.webp';
import p3 from './assets/p3.jpg';
import p4 from './assets/p4.jpg';           //will update this imports later
import p5 from './assets/p5.jpg';
import p6 from './assets/p6.jpg';
import p7 from './assets/p7.jpg';

const Segment = ({ title }) => {

    return (
        <div className={styles.segment}>
            <p className={styles.title}>
                {title}
            </p>
            <div className={styles.row}>
                <img src={p7} />
                <img src={p1}/>
                <img src={p2}/>
                <img src={p3} />
                <img src={p4} />
                <img src={p5} />
                <img src={p6} />
                <button className={styles.button}>
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    )
}

export default Segment