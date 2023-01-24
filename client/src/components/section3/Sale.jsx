import React from "react";
import styles from "./sale.module.css";
const Sale = () => {
  return (
    <div className={styles.background}>
      <div className={styles.text}>
        <h1 className={styles.hTag}>Up To 50% Off</h1>
        <p className={styles.Winter}>Winter Sale</p>
        <p className={styles.pTag}>Him she'd let them sixth saw light</p>
        <button className={styles.button}>Shop Now</button>
      </div>
    </div>
  );
};

export default Sale;
