import Styles from "./styles.module.css"
import React from 'react'
import { useState } from "react";

   


function Card(props) {
    const [showMeme, setShowMeme] = useState(true);
    const hideMeme = () => {
        setShowMeme(!showMeme);
      }
  return (
    
    <div className={Styles.container}>
      <div className={Styles.card}>
        {showMeme && (
          <div className={Styles.card_item}>
            <img src={props.image} alt="." className={Styles.card_img} />
            <span className={Styles.card_name}>{props.name}</span>
            <span className={Styles.card_title}>{props.title}</span>
            <span className={Styles.card_body}>{props.body}</span>
            
          </div>
        )}
        <div className={Styles.card_item}>
        <button onClick={hideMeme}>
              SHOW {showMeme}
            </button>
        </div>
        
      </div>
    </div>
  );
}

export default Card;