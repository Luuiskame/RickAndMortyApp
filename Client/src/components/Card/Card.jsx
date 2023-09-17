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
         {location.pathname === "/home" ? <button onClick={()=> onClose(id)}>X</button>
         :null}
        
         <h2>Name: {name}</h2>
         <h2>{status}</h2>
         <h2>ID: {id}</h2>
         <h2>Gender: {gender}</h2>
         <div>
          <Link to={`/detail/${id}`}>
         <img src={image} alt='name' />
         </Link>
         {isFav ? <button onClick={handleFavorite} handleFavorite={handleFavorite}>❤️</button>  
         :<button onClick={handleFavorite} handleFavorite={handleFavorite}>🤍</button>}
         </div>
  
      </div>
   );
}

