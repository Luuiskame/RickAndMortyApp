import { useState } from "react";

function SearchBar({onSearch}) {

   const [id,setId] = useState("")

   const handleChange = (e)=>{
      setId(e.target.value)
   }
   return (
      <div>
         <input onChange={handleChange} value={id} type='search' />
         <button onClick={()=> {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}

export default SearchBar
