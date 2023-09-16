import { useState } from "react";

function SearchBar({onSearch, randomHandler}) {

   const [id,setId] = useState("")

   const handleChange = (e)=>{
      setId(e.target.value)
   }
   return (
      <div>
         <input onChange={handleChange}  value={id} type='search' />
         <button onClick={()=> {onSearch(id); setId('')}}>Agregar</button>
         <button onClick={()=>randomHandler()}>add random character</button>

      </div>
   );
}

export default SearchBar
