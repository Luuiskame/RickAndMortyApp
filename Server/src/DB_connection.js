require('dotenv').config()
const {Sequelize} = require('sequelize')
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env  //! enviorment 
const FavoriteModel = require('./models/Favorite')
const UserModel = require('./models/User')

//sequelize instance
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
    {loggin: false, native:false}
)

//executing models
FavoriteModel(sequelize)
UserModel(sequelize)


//models and relations
const {User, Favorite} = sequelize.models

User.belongsToMany(Favorite, {through: "user__favorite"})
Favorite.belongsToMany(User, {through: "user_favorite"})


module.exports = {
    User,
    Favorite,
    conn: sequelize
}