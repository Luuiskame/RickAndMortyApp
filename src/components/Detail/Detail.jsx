import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

// ? importing css class
import styles from './Detail.module.css'

function Detail (){
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(()=>{
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({data})=>{
            if(data.name){
                setCharacter(data)
            } else {
                window.alert("No hay personajes con ese ID")
            }
        })
        return setCharacter({})
    }, [id])
    return(
        <div className={styles.mainDetailContainer}>
            <div className={styles.mainImageContainer}><img alt={character.name} src={character.image}/></div>
            <div className={styles.textContainer}>
            <h2><span>ID:</span> {character.id}</h2>
            <h2><span>NAME:</span> {character.name}</h2>
            <h2><span>ORIGIN:</span> {character.origin?.name}</h2>
            <h2><span>GENDER:</span> {character.gender}</h2>
            <h2><span>SPECIE:</span> {character.species}</h2>
            <h2><span>LOCATION:</span> {character.location?.name}</h2>
            </div>
        </div>
    )
}

export default Detail