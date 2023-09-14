import Card from './Card';

export default function Cards(props) {
   // const {id,name,status,species,gender,image,onClose,origin} = props
   const {characters,onClose} = props
   return (
      <div>
         {characters?.map((character)=> 
         <Card key={character.id}
               id={character.id}
               name={character.name}
               status={character.status}
               image={character.image}
               gender={character.gender}
               onClose={onClose}
         />
         
         )}
      </div>
   )
}
