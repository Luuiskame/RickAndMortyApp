const {Favorite} = require('../DB_connection')

const getFavorites =async (req,res)=>{
    try {
        const allFavorites = await Favorite.findAll()
        
        if(!allFavorites) return res.status(400).send("there is not fav characters")
        
        res.status(200).json(allFavorites)
    
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getFavorites