import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavourite, deleteFavourite } from "../../redux/actions";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

//?
import styles from './Card.module.css'

export default function Card(props) {
   const {id,name,status,image,onClose,gender,location,origin,species} = props
   const dispatch = useDispatch()
   const myFavorites = useSelector(state=> state.myFavorites)
   const [isFav, setIsFav] = useState(false)
   const locationHook = useLocation()
   const navigate = useNavigate()

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         dispatch(deleteFavourite(id))
      } else {
         setIsFav(true)
         dispatch(addFavourite({id,name,status,image,gender,origin,location,species}))
      }
   }

   const goToDetail = ()=>{
      navigate(`/detail/${id}`)
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div className={styles.homeContainer}>
         {locationHook.pathname === "/home" ? <button className={styles.closeBtn} onClick={()=> onClose(id)}><FontAwesomeIcon icon={faTimes} /></button>
         :null}
         <div onClick={goToDetail} className={styles.textContainer}>
            <div className={styles.nameCardContainer}>
         <h2  className={styles.h2CardName}>{name}</h2>
         </div>
        
         <div className={styles.restCardTextContainer}>
            <div className={styles.idTextContainer}>
         <h2 className={styles.h2Card}><span>ID:</span>{id}</h2>
            </div>
         <h2 className={styles.h2Card}><FontAwesomeIcon icon={faLocationDot}/> {location}</h2>
         </div>
         </div>
         
         <div className={styles.imgFavContainer}>
            <div onClick={goToDetail} className={styles.homeImgContainer}>
         <img className={styles.homeImg} src={image} alt='name'/>
         </div>
         {isFav ? <button className={styles.favBtn} onClick={handleFavorite}>❤️</button>  
         :<button className={styles.favBtn} onClick={handleFavorite}>🤍</button>}
         </div>
      </div>
   );
}

