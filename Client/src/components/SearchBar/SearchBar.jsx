import { useState } from "react";
import styles from './searchBar.module.css'
//? icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';

function SearchBar({onSearch, randomHandler}) {

   const [id,setId] = useState("")

   const handleChange = (e)=>{
      setId(e.target.value)
   }
   return (
      <div className={styles.searchBarContainer}>
         <input className={styles.searchbar} onChange={handleChange}  value={id} type='search'  placeholder="enter a ID"/>
         
         <div className={styles.buttonsInputContainer}>
         <button className={styles.inputBtns} onClick={()=> {onSearch(id); setId('')}}> <FontAwesomeIcon icon={faSearchengin} /></button>
         <button className={styles.inputBtns} onClick={()=>randomHandler()}>ADD RANDOM</button>
         </div>

      </div>
   );
}

export default SearchBar
