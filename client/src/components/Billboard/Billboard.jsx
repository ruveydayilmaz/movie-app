import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./Billboard.module.css";

var slides 

const Slide = ({ id, backdrop_path, name, title, overview, media_type }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const link = media_type  === 'tv' ? `/shows/${id}` : `/movies/${id}`

  return (
    <Link to={link}>
      <div className={styles.slide}>
        <img src={imageUrl} alt={name} />

        <div className={styles.info}>
          <h2 className={styles.show__name}>{name? name : title}</h2>
          <div className={styles.description}>{overview}</div>
        </div>
      </div>
    </Link>
  );
};

const Billboard = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const trending = useSelector((state) => state.movies.trending);
  const slides = trending?.results.slice(0, 5);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentSlideIndex((currentSlideIndex) => (currentSlideIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timerId);
  }, []);

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className={styles.billboard}>
      <div className={styles.innerBillboard}>
        <Slide {...currentSlide} />
      </div>
    </div>
  );
};

export default Billboard;
