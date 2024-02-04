require('dotenv').config()
const {Sequelize} = require('sequelize')
const {DB_USER, DB_PASSWORD, DB_HOST, POSTGRES_URL} = process.env  //! enviorment 
const FavoriteModel = require('./models/Favorite')
const UserModel = require('./models/User')
const pg = require('pg')

//sequelize instance
const sequelize = new Sequelize(POSTGRES_URL + "?sslmode=require", {
    dialectModule: pg,
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });

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