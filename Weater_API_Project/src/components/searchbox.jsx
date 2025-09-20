import styles from "./SearchBox.module.css";
import React from "react";

function SearchBox({ city, setCity, onSearch }) {
  return (
    <div className={styles["search-container"]}>
      <input 
        type="text" 
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search for a place..." 
        className={styles["search-input"]} 
      />
      <button  onClick={onSearch} className={styles["search-button"]}>Search</button>
    </div>
  );
}

export default SearchBox;