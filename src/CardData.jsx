import React from "react";
import Card from './Card';
const DataApi = [
  {
    id:1,
    title:"Abcd",
    src:"https://picsum.photos/200/200"
  },
  {
    id:2,
    title:"Abcde",
    src:"https://picsum.photos/300/200"
  },
  {
    id:3,
    title:"Abcdf",
    src:"https://picsum.photos/200/300"
  }
  ];
  
  export default function CardData(val){
      return(
      <Card key={val.id}
        title={val.title}
        imageUri={val.src} />
        );
  }
  
  export {DataApi};