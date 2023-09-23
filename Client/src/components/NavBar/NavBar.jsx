import SearchBar from "../SearchBar/SearchBar"
import HamburgerMenu from "../Hamburguer/HamburgerMenu"
//? styles
import styles from './Navbar.module.css'

function Nav({onSearch, randomHandler}){
   return (
      <div className={styles.navContainer}>
         <SearchBar randomHandler={randomHandler} onSearch={onSearch}/>
       <HamburgerMenu/>
    </div>
   )
}

export default Nav