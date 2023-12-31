//? hooks
import { useSelector} from "react-redux/es/hooks/useSelector"
import { Link } from "react-router-dom"
import { useDispatch} from "react-redux";
import { useState } from "react";

//? components
import Card from "../Card/Card"

//? redux
import { filterCards, orderCards } from "../../redux/actions";

function Favorites() {
  const favorites = useSelector((state) => state.myFavorites);  
  console.log(favorites)
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false)

    function handleOrder(e){
      console.log(e.target.value, favorites)
      dispatch(orderCards(e.target.value))
      setAux(true)
    }

    function handleFilter(e){
      console.log(e.target.value, favorites)
      dispatch(filterCards(e.target.value))
      
    }
    return (
      <>
        <select onChange={handleOrder}>
        <option value="upwards">upwards</option>
        <option value="downwards">downwards</option>
        </select>
        
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        {favorites.map((character) => (
            <Card
              id={character.id}
              name={character.name}
              status={character.status}
              image={character.image}
              origin={character.origin}
              // handleFavorite
            />
        ))}
      </>
    );
  }

export default Favorites