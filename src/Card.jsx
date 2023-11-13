import React from 'react';
import './index.css';
export default function Card(probs){
  return(
    <>
     <div className="card">
       <h2 className="card_title">{probs.title}</h2>
       <div className="card_body">
        <img src={probs.imageUri} alt="photos" />
        <button className="btn">More Info</button>
       </div>
     </div>
    </>
    );
}