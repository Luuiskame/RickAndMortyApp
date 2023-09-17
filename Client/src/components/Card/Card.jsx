import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavourite, deleteFavourite } from "../../redux/actions";

//?
import styles from './Card.module.css'

export default function Card(props) {
   const {id,name,status,image,onClose,gender} = props
   const dispatch = useDispatch()
   const myFavorites = useSelector(state=> state.myFavorites)
   const [isFav, setIsFav] = useState(false)
   const location = useLocation()

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         dispatch(deleteFavourite(id))
      } else {
         setIsFav(true)
         dispatch(addFavourite({id,name,status,image,handleFavorite,gender}))
      }
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
         {location.pathname === "/home" ? <button className={styles.closeBtn} onClick={()=> onClose(id)}>X</button>
         :null}
         <div className={styles.textContainer}>
         <h2>Name: {name}</h2>
         <h2>{status}</h2>
         <h2>ID: {id}</h2>
         <h2>Gender: {gender}</h2>
         </div>
         <div className={styles.imgFavContainer}>
          <Link to={`/detail/${id}`}>
            <div className={styles.homeImgContainer}>
         <img className={styles.homeImg} src={image} alt='name' />
         </div>
         </Link>
         {isFav ? <button className={styles.favBtn} onClick={handleFavorite} handleFavorite={handleFavorite}>❤️</button>  
         :<button className={styles.favBtn} onClick={handleFavorite} handleFavorite={handleFavorite}>🤍</button>}
         </div>
  
      </div>
   );
}

