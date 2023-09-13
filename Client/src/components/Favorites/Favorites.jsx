import { useSelector} from "react-redux/es/hooks/useSelector"
import { Link } from "react-router-dom"
import Card from "../Card"

function Favorites() {
    const myFavorites = useSelector((state) => state.myFavorites);  
    return (
      <>
        {myFavorites.map((character) => (
            <Card
              id={character.id}
              name={character.name}
              status={character.status}
              image={character.image}
              handleFavorite={() => {}}
            />
        ))}
      </>
    );
  }

export default Favorites