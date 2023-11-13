import React,{useState} from 'react';
import './css/TabStyle.css';
import TabConfig from './TabConfig';
import FoodCard from './Card';
import FoodProducts from './Product';

const TabMenu = (probs)=> {
  const [currProd,newProd] = useState(FoodProducts);
  function FilterFood(e){
    const prodType = e.target.innerText;
    const filterProds = FoodProducts.filter((products)=>{
      return prodType===products.type;
    });
    newProd(filterProds);
    return;
  }
  
  return(
    <>
    <div className="tab-container">
    <h1>{probs.name}</h1>
    <hr />
     <div className="tabs flex">
      { TabConfig.map((elem)=> {
      return(
        <button
          key={elem.id}
          id={elem.id}
          className="btn-tab"
          onClick={(e)=>FilterFood(e)}
          > {elem.name} </button>
      );
    }) }
    </div>
  </div>
  
  <div className="food-container container flex">
    <FoodCard FoodsProd={currProd} />
   </div>
  </>
);
};


export default TabMenu;