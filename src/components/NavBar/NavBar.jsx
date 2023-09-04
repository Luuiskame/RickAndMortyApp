import SearchBar from "../SearchBar"
import { Link } from "react-router-dom"

function Nav({onSearch}){
   return (
    <>
         <SearchBar onSearch={onSearch}/>
         <Link to={'/home'}>
            <button>Home</button>
         </Link>
         
         <Link to={'/about'}>
            <button>About</button>
         </Link>
    </>
   )
}

export default Nav