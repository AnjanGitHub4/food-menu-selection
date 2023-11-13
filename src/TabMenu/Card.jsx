import React from 'react';
export default function FoodCard({FoodsProd}){
   return(
     <>
     {
     FoodsProd.map((elem)=>{
     return(
      <div key={elem.id} className="card flex">
      <div className="card-left">
       <img
        src={elem.imgUri}
        alt={elem.name}
       />
      </div>
      <div className="card-right">
       <h2 className="food-title">{elem.name}</h2>
       <p className="food-price">price : {elem.price}</p>
       <p className="food-desc">{elem.desc}</p>
       <button 
       className="btn check-food-btn">
        Check food</button>
        </div>
      </div> 
      )})
     }
   </>
 )};