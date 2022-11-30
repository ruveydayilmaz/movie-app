import styles from "./EpisodeList.module.css";

const EpidodeList = ({imageUrl}) => {

    return (
        <div className={styles.episodes__container}>
            <h2>Episodes</h2>
            <img className={styles.movie__poster} src={imageUrl} alt="movie poster" />
            <ul className={styles.episode__list}>
                <li>
                    <a href="/episodes/1">Episode 1</a>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, sint!</p>
                </li>
                <li>
                    <a href="/episodes/2">Episode 2</a>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </li>
                <li>
                    <a href="/episodes/3">Episode 3</a>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus.</p>
                </li>
                <li>
                    <a href="/episodes/4">Episode 4</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.</p>
                </li>
            </ul>
        </div>
    )
}

export default EpidodeList