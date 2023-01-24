import React, { useEffect, useState } from "react";
import styles from "./trending.module.css";
import axios from "axios";
const Trending = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => setCards(res.data));
  }, []);

  return (
    <div className={styles.maindiv}>
      <div className={styles.container}>
        <div className={styles.title}>
          <p className={styles.popular}>Popular Item in the market</p>
          <h1 className={styles.hTag}>Trending Product</h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.cards}>
          {cards.map((card) => {
            return (
              <div className={styles.card}>
                <div className={`${styles.cardDiv} ${styles.lgShadow} `}>
                  <div>
                    <img
                      src="https://preview.colorlib.com/theme/aroma/img/product/product7.png.webp"
                      alt="images"
                      className={styles.image}
                    />
                    <div className={styles.hoverEffect}>[PK,GPG,KRP,TF[GRTF</div>
                  </div>
                  <h3 className={styles.Name}> {card.name}</h3>
                 <p className={styles.description}> {card.description}</p>
                 <p className={styles.description}> {card.price}</p>
                 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trending;
