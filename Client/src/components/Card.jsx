import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavourite, deleteFavourite } from "../redux/actions";

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
      <div>
         {location.pathname === "/home" ? <button onClick={()=> onClose(id)}>X</button>
         :null}
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>ID: {id}</h2>
         <h2>Gender: {}</h2>
         <div>
            
         <img src={image} alt='name' />
         {isFav ? <button onClick={handleFavorite} handleFavorite={handleFavorite}>❤️</button>  
         :<button onClick={handleFavorite} handleFavorite={handleFavorite}>🤍</button>}
         </div>
  
      </div>
   );
}

