//? hooks
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

//? components
import styles from "./Favorites.module.css";
import Card from "../Card/Card";

//? redux
import { filterCards, orderCards, getFavorites, resetFilters } from "../../redux/actions";

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);
  console.log(favorites);
  const [aux, setAux] = useState(false);

  function handleOrder(e) {
    console.log(e.target.value, favorites);
    dispatch(orderCards(e.target.value));
    setAux(true);
  }

  function handleFilter(e) {
    console.log(e.target.value, favorites);
    dispatch(filterCards(e.target.value));
  }

  const resetFiltersfn = ()=>{
    dispatch(resetFilters())
  }

  useEffect(()=>{
    dispatch(getFavorites())
  },[])
  return (
    <div className={styles.favoritesContainer}>
        <div className={styles.filtersContainer}>
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
        <button onClick={resetFiltersfn}>RESET FILTERS</button>
      </div>

      {favorites.length === 0 ? (
        <p>you haven't add any card to your favorites yet</p>
      ) : (
        favorites.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            image={character.image}
            origin={character.origin}
            // handleFavorite
          />
        ))
      )}
    </div>
  );
}

export default Favorites;
