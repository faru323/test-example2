import React from "react";
import styles from "./first.module.css";

const First = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.leftDiv}>
        <img
          className={styles.img}
          src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png.webp"
          alt="images"
        />
      </div>
      <div className={styles.rightDiv}>
     <div className={styles.textContain }>
     <p className={styles.Fun}>Shop is Fun</p>
     <h1 className={styles.Browse}>BROWSE OUR PREMIUM PRODUCT</h1>
     <p className={styles.paragraf}>
       Us which over of signs divide dominion deep fill bring they're meat
       beho upon own earth without morning over third. Their male dry. They
       are great appear whose land fly grass.
     </p>
     <button className={styles.button} >Browse Now</button>
     </div>
      </div>
    </div>
  );
};

export default First;
