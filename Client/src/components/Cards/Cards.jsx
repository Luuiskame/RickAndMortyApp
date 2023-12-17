import { useState } from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   // const {id,name,status,species,gender,image,onClose,origin} = props
   const {characters,onClose} = props

   const [currentPage,setCurrentPage] = useState(1)
   const characterPerPage = 8

   const totalPages = Math.ceil(characters.length/characterPerPage)
   const start = (currentPage -1) * characterPerPage
   const end = start + characterPerPage

   const currentCharacters = characters.slice(start,end)

   const nextPageHandle = ()=>{
      setCurrentPage(currentPage + 1)
   }

   const prevPageHandle = ()=>{
      setCurrentPage(currentPage - 1)
   }

   const firstPageHandle = ()=>{
      setCurrentPage(1)
   }

   const lastPageHandle = ()=> {
      setCurrentPage(totalPages)
   }

   return (
      <>
      <div className={styles.cardsContainer}>
         {currentCharacters?.map((character)=> 
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
      <div className={styles.homeBtnsContainer}>
        <button
          className={styles.pagBtn}
          onClick={prevPageHandle}
          disabled={currentPage === 1}
        >
          previous
        </button>

        <button
          className={styles.pagBtn}
          onClick={firstPageHandle}
          disabled={currentPage === 1}
        >
          1
        </button>

        <button
          className={styles.pagBtn}
          onClick={lastPageHandle}
          disabled={currentPage === totalPages}
        >
          {totalPages}
        </button>

        <button
          className={styles.pagBtn}
          onClick={nextPageHandle}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      </>
   )
}
