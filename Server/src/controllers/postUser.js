const {User} = require('../DB_connection')

async function postUser(req,res){
    try {
        const {email, password} = req.body
        if(!email || !password) return res.status(400).send("empty inputs")
    
        const existingUser = await User.findOne({
            where: {
                email: email
            }
            
        })

        if(existingUser) return res.status(400).send("Email already registered")
        
    const user = await User.create({
                email: email,
                password: password,
        })
        res.status(200).json(user)
    } catch (error) {
        return res.status(502).json({error: error.message})
    }
}


module.exports = postUser