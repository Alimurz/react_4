import React from "react";
import styles from './styles.module.css'
function Form() {
    return(
 <form>
    <input type="text" className={styles.input_text} placeholder="write the title"/>
    <button className={styles.form_btn}>add</button>
 </form>    
    )
}
export default Form;