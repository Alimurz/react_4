import React from "react";
import styles from './styles.module.css'
function Form() {
    return(import React, { useState } from 'react';
import styles from './styles.module.css';

function Form({ addMeme }) {
  const [title, setTitle] = useState('');

  const addToList = () => {
    const newMeme = {
      id: Math.random(),
      title: title,
      body: ''
    };
    addMeme(newMeme);
    setTitle('');
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className={styles.input_text}
          placeholder="Write the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className={styles.form_btn} onClick={addToList}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
 <form>
    <input type="text" className={styles.input_text} placeholder="write the title"/>
    <button className={styles.form_btn}>add</button>
 </form>    
    )
}
export default Form;
