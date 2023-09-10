import { useSelector } from "react-redux/es/hooks/useSelector"
import { Link } from "react-router-dom"

function Favorites(){
    const myFavorites = useSelector(state=> state.myFavorites)
    return(
        <>
            {myFavorites.map(character=>{
               return(
                <div>
                <Link >
                <h2>{character.name}</h2>
                </Link>
                <h2>{character.status}</h2>
                <h2>ID: {character.id}</h2>
                <img src={character.image} alt='name' />
                
             </div>
               )
            })}
        </>
    )
}

export default Favorites