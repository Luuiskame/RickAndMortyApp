import { useState } from "react";
import styles from './searchBar.module.css'
//? icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';

function SearchBar({onSearch, randomHandler}) {

   const [id, setId] = useState(null);

   const handleChange = (e) => {
      const value = e.target.value;
      
      setId(value ? Number(value) : null);
   };

   return (
      <div className={styles.searchBarContainer}>
         <input 
            className={styles.searchbar} 
            onChange={handleChange}  
            value={id || ''} 
            type='search'  
            placeholder="Enter any number"
         />
         
         <div className={styles.buttonsInputContainer}>
         <button 
            className={styles.inputBtns} 
            onClick={() => { 
               onSearch(id); 
               setId(null);
            }}>
            <FontAwesomeIcon icon={faSearchengin} />
         </button>
         <button 
            className={styles.inputBtns} 
            onClick={() => randomHandler()}>
            ADD RANDOM
         </button>
         </div>

      </div>
   );
}


export default SearchBar
