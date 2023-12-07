//? EXPRESS
const express = require('express')
const router = require('./routes/')
const server = express()
const PORT = 3001

// sequelize
const {conn} = require('./DB_connection')

server.listen(PORT, ()=>{
   conn.sync({force: false})
    console.log(`server running on port ${PORT}`)
})

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json())

//with the first parameter we make sure all routes start with the  "/rickandmorty" string first
 server.use( "/rickandmorty",router)