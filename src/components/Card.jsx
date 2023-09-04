import { Link } from "react-router-dom";


export default function Card(props) {
   const {id,name,status,image,onClose} = props
   return (
      <div>
         <button onClick={()=> onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>ID: {id}</h2>
         <img src={image} alt='name' />
      </div>
   );
}
