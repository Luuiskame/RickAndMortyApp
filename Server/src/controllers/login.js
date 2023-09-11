const users = require('../utils/users')

// function login(req,res){
//     const {email, password} = req.query
//     const found = users.find(user=> user.email === email && user.password === password)

//     const access = found ? true : false
//     res.status(200).json({access})
// }

// module.exports = login



function login(req,res){
    const {email, password} = req.query

    if(users === email && users.password === password){
        res.status(200).json({access:true})
    } else {
        res.status(200).json({access:false})
    }
}

module.exports = login