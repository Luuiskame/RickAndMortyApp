const {User} = require('../DB_connection')

async function login(req,res){
    try {
        const {email, password} = req.query
        if(!email || !password) return res.status(400).send("empty inputs")

        //finding email in data base
        const user = await User.findOne({
            where: {
                email
            }
        })

        //then we checking if it exist or not
        if(!user) return res.status(400).send("user not found")

        //if does, the function just continues
        return user.password === password 
        ? res.status(200).json({access: true})
        : res.status(404).send("wrong password")

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports =  login