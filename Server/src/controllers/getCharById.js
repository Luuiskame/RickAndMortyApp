const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios')

async function getCharById(req,res){
    const {id} = req.params
    try {
        const response = await axios(`${URL}${id}`)
        const data = response.data
        
        const character = {
            id: data.id,
           name: data.status,
            species: data.species,
            origin: data.origin?.name,
            image: data.image, 
            gender: data.gender,
            name: data.name,
            location: data.location?.name
        }
        character.id ? res.status(200).json(character) 
        : res.status(400).send("character not found")

    } catch(error){
        res.status(500).json({message: error.message})
    }
}


module.exports =  getCharById


// function getCharById(req,res){
//     const {id} = req.params
//     axios(`${URL}${id}`)
//     .then(response => response.data)
//     .then(data=>{
//         const {id,status,species,origin,image,gender,name} = data
//         const character = {
//             id,
//             status,
//             species,
//             origin,
//             image, 
//             gender,
//             name
//         }
//         character.id ? res.status(200).json(character) 
//         : res.status(404).send("character not found")
//     })
//     .catch(error=>{
//         res.status(500).json({message: error.message})
//     })
// }
// module.exports =  getCharById


// async function getCharById(req, res) {
//     try {
//       const { id } = req.params;
  
//       const response = await axios.get(`${URL}/${id}`);
//       const { status, name, species, origin, image, gender } = response.data;
  
//       if (name) {
//         const character = {
//           id,
//           name,
//           species,
//           origin,
//           image,
//           gender,
//           status
//         };
//         res.status(200).json(character);
//       }
  
//       res.status(404).send('Not found');
//     } catch (error) {
//       res.status(500).json({message: error.message})
//     }
//   }
  
//   module.exports = getCharById

