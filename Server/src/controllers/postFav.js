const {Favorite} = require('../DB_connection')

async function postFav(req,res){
    try {
        const {id,name,origin,status,image, species,gender} = req.body
        if(!id || !origin || !status || !image || !species || !gender || !name){
            return res.status(401).send("missing data")
        }

        await Favorite.findOrCreate({
            where: {
                id,name,origin,status,image,species,gender
            }
        })

        const allFav = await Favorite.findAll()
        return res.status(200).json(allFav)
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = postFav
