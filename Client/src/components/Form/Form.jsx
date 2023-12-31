import { useState, useEffect } from "react"
import validation from "../Validation/Validiation"

import styles from './Form.module.css'

// ErrorForm
import ErrorForm from "../ErrorForm/ErrorForm."

function Form ({login}){
    const [showErrorForm, setShowErrorForm] = useState(false)
    const [submitClicked, setSubmitClicked] = useState(false)
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    useEffect(()=>{
        if(showErrorForm){
            const timer = setTimeout(()=>{
                setShowErrorForm(false)
            },1000)
            return ()=>{
                clearTimeout(timer)
            }
        }
    },[showErrorForm])

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

    const handleSubmit =  (event)=>{
        event.preventDefault()
        setSubmitClicked(true)
        if(errors.password && submitClicked){
            setShowErrorForm(true)
        } else {
            login(userData)
        }
    }
    return(
        <form onSubmit={handleSubmit} className={styles.Form}>
            {showErrorForm  && <ErrorForm/>}
        <h1>Log In</h1>
        <div className={styles.imageContainer}>
            <img className={styles.loginImg} src="/Img/loginPicv2.jpg" alt="image" />
        </div>
        
        <div className={styles.labelContainers}>
        <label className={styles.formLabels} htmlFor="email">email</label>
        <input className={styles.formInput} type="email" name="email" onChange={handleChange} value={userData.email}/>
        {/* {errors.email && <p className={styles.errorP}>{errors.email}</p>} */}
        </div>

        <div className={styles.labelContainers}>
        <label className={styles.formLabels} htmlFor="password">password</label>
        <input className={styles.formInput} type="password" name="password" value={userData.password} onChange={handleChange}/>
        {/* {errors.password && <p className={styles.errorP}>{errors.password}</p>} */}
        </div>
        <button className={styles.buttonForm}>Submit</button>
    </form>
    )
    
}

export default Form