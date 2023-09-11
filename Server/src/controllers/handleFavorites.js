
let myFavorites = []

function postFav(req,res){
    const {character} = req.body
    myFavorites.push(character)
    res.status(200).json(myFavorites)
}

function deleteFav(req,res){
    const {id} = req.params
    const favFiltered = myFavorites.filter(char=> char.id !== +id)
    myFavorites = favFiltered
    res.status(200).json(favFiltered)
}


module.exports = {
    postFav,
    deleteFav
}