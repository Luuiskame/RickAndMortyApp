// const characters = require('./utils/data')
const http = require("http")
const {getCharById} = require('./controllers/getCharById')

const PORT = 3001

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    // const url = req.url
    if(req.url.includes("/rickandmorty/character")){
       const id = req.url.split('/').pop() //? ['rickandmorty' 'character', '3']
       getCharById(res, +id)
    }
    

})
.listen(PORT, ()=>{
    console.log(`server listening on port: ${PORT}`)
})
