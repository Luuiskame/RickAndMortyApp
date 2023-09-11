const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios')

function getCharById(req,res){
    const {id} = req.params
    axios(`${URL}${id}`)
    .then(response => response.data)
    .then(data=>{
        const {id,status,species,origin,image,gender,name} = data
        const character = {
            id,
            status,
            species,
            origin,
            image, 
            gender,
            name
        }
        character.id ? res.status(200).json(character) 
        : res.status(404).send("character not found")
    })
    .catch(error=>{
        res.status(500).json({message: error.message})
    })
}


module.exports =  getCharById
