import React, { useState } from 'react';
import Styles from "./styles.module.css";

function Card(props) {
  const [showMeme, setShowMeme] = useState(true);

  const hideMeme = () => {
    setShowMeme(false);
  };

  return (
    <div className={Styles.container}>
      {showMeme && (
        <div className={Styles.card}>
          <div className={Styles.card_item}>
            <img src={props.image} alt="." className={Styles.card_img} />
            <span className={Styles.card_name}>{props.name}</span>
            <span className={Styles.card_title}>{props.title}</span>
            <span className={Styles.card_body}>{props.body}</span>
          </div>
          <div className={Styles.card_item}>
            <button onClick={hideMeme}>Remove</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
