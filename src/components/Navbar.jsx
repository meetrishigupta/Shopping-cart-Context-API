import React from "react";
import styles from "../styles/Total.module.css";
import { UseValue } from "../itemContext";


function Navbar() {
  const {item, total, handleReset, toggle} = UseValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <button className={styles.cartButton} onClick={toggle}>Cart</button>
      <button className={styles.itemButton} onClick={handleReset}>
          Reset
        </button>
    </div>
  );
}

export default Navbar;
