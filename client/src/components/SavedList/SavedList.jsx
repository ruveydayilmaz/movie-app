import React from "react";
import SavedShows from "../ListRow/SavedShows";
import styles from "./SavedList.module.css";

const SavedList = ({ bookmarks }) => {
  if (bookmarks.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.saved__list}>
      <h3 className={styles.saved__title}>Saved Movies</h3>
      <div className={styles.saved__shows}>
        {bookmarks?.length > 0 &&
          bookmarks?.map((movie) => (
            <SavedShows key={movie.id} movie={movie} />
          ))
        }
      </div>
    </div>
  );
};

export default SavedList;
