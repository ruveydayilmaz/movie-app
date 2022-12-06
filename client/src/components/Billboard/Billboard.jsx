import React from "react";
import styles from "./Billboard.module.css";
import billboardHeroImg from "./assets/billboardHeroImg.webp";
import billboardHeroTitle from "./assets/billboardHeroTitle.webp";
import PlayIcon from "./PlayIcon";
import InfoIcon from "./InfoIcon";

const Billboard = () => {
  return (
    <div className={styles.billboard}>
      <div className={styles.innerBillboard}>

        <div className={styles.fade}></div>
        <img src={billboardHeroImg} />
        <div className={styles.fadeOut}></div>
        
        <div className={styles.info}>
          <img src={billboardHeroTitle} />

          <div className={styles.description}>
            Hayatını mükemmel soygunu planlamaya adadı ve eğitim verdiği
            hırsızlardan bir ekip yarattı. Polis de dâhil hiç kimse kendilerini
            bekleyen sürprizlerin farkında değil.
          </div>

          <div className={styles.links}>
            <a href="/">
              <PlayIcon />
              <span>Play</span>
            </a>
            <button>
              <InfoIcon />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
