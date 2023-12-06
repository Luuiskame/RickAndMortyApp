import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   // const {id,name,status,species,gender,image,onClose,origin} = props
   const {characters,onClose} = props
   return (
      <div className={styles.cardsContainer}>
         {characters?.map((character)=> 
         <Card key={character.id}
               id={character.id}
               name={character.name}
               status={character.status}
               image={character.image}
               gender={character.gender}
               origin={character.origin}
               location={character.location}
               species={character.species}
               onClose={onClose}
         />
         
         )}
      </div>
   )
}
