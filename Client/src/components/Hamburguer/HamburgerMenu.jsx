
import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css'; // Create a CSS file for styling
import { Link } from "react-router-dom"


function HamburgerMenu() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
    console.log(isHamburgerOpen)
  };

  return (
    <div className={`${styles.hamburgerMainContainer} ${isHamburgerOpen ? styles.showHamburgerBtnsContainer : ''}`}>
    {/* <div className={`menu-icon ${isHamburgerOpen ? 'open' : ''}`} onClick={toggleMenu}> */}
    <div className={`${styles.menuIcon} ${isHamburgerOpen ? styles.open : ''}` } onClick={toggleMenu}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
      
      <div className={`${styles.hamburgerBtnsContainer} ${isHamburgerOpen ? styles.showHamburgerBtns : ''}`}>
      <Link to={'/home'}>
            <button className={styles.hamburgerBtns}>Home</button>
         </Link>
         
         <Link to={'/about'}>
            <button className={styles.hamburgerBtns}>About</button>
         </Link>

         <Link to={'/favorites'}>
            <button className={styles.hamburgerBtns}>Favorites</button>
         </Link>
      </div>
    </div>
  );
}

export default HamburgerMenu;
