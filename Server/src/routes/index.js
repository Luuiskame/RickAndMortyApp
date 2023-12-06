const {Router} = require("express")
const getCharById = require("../controllers/getCharById")
const login = require("../controllers/login")
const postUser = require("../controllers/postUser")
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')
// const {postFav, deleteFav} = require("../controllers/handleFavorites")

const router = Router()

router.get("/character/:id", getCharById)

router.get("/login", login)
router.post("/login", postUser)

//favs routes
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav )



module.exports = router