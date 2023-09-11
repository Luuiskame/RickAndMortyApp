import { useState } from "react"
import validation from "../Validation/Validiation"


function Form ({login}){
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        login(userData)
    }
    return(
       <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <label htmlFor="email">email</label>
        <input type="email" name="email" onChange={handleChange} value={userData.email}/>
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor="password">password</label>
        <input type="password" name="password" value={userData.password} onChange={handleChange}/>
        {errors.password && <p>{errors.password}</p>}
        <button>Submit</button>
    </form>
    )
    
}

export default Form