import SearchBar from "../SearchBar"
import { Link } from "react-router-dom"

function Nav({onSearch, randomHandler}){
   return (
    <>
         <SearchBar randomHandler={randomHandler} onSearch={onSearch}/>
         <Link to={'/home'}>
            <button>Home</button>
         </Link>
         
         <Link to={'/about'}>
            <button>About</button>
         </Link>

         <Link to={'/favorites'}>
            <button>Favorites</button>
         </Link>
    </>
   )
}

export default Nav