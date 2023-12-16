
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
      <ul className={styles.linksMainContainer}>
        <li className={styles.linksContainer}><Link className={styles.links} to='/home'>Home</Link></li>
        <li className={styles.linksContainer}><Link className={styles.links} to='favorites'>favorites</Link></li>
        <li className={styles.linksContainer}><Link className={styles.links} to='about'>about</Link></li>
      </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
