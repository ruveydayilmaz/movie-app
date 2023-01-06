import styles from "./EpisodeList.module.css";
import { useSelector } from "react-redux";

const EpidodeList = ({imageUrl}) => {
    const videos = useSelector((state) => state.shows.videos);

    videos.results = videos?.results?.slice(0, 2);

    return (
        <div className={styles.episodes__container}>
            <h2>Official Trailers</h2>
            <img className={styles.movie__poster} src={imageUrl} alt="movie poster" />
            <ul className={styles.episode__list}>
                {videos?.results?.map((video) => (
                    <li key={video.id} className={styles.episode__item}>  
                        {/* ERROR: blocked by client */}
                        <iframe
                            width="420"
                            height="240"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title={video.name}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EpidodeList