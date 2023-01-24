import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { BsBasket2Fill } from "react-icons//bs";
import { AiOutlineSearch } from "react-icons//ai";
import { GiBasket } from "react-icons//gi";
const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
    <div className={styles.navb}>
      <div className={styles.navbLeft}>
        <BsBasket2Fill className={styles.logo} /> <span className={styles.name}>Aroma</span>
      </div>
      <div className={styles.navbMiddle}>
        <ul className={styles.navbUl}>
          <li className={styles.navList}>
            {" "}
            <Link className={styles.navLi} to="/">
              Home
            </Link>
          </li>
          <li className={styles.navList}>
            <Link className={styles.navLi} to="/">
              Wishlist
            </Link>
          </li>
          <li className={styles.navList}>
            <Link className={styles.navLi} to="/">
              Shop
            </Link>
          </li>
          <li className={styles.navList}>
            <Link className={styles.navLi} to="/">
              Contact
            </Link>
          </li>
          <li className={styles.navList}>
            <Link className={styles.navLi} to="/">
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.navbRight}>
        <AiOutlineSearch className={styles.searchLogo} />
        <GiBasket className={styles.basketLogo} />
        <button className={styles.button}>Buy Now</button>
      </div>
    </div>
    
    
    
    </div>
  );
};

export default Navbar;
