import styles from './ErrorForm.module.css'

 function ErrorForm(){
    return (
        <div className={styles.error}>
            Invalid email or password
        </div>
    )
}

export default ErrorForm