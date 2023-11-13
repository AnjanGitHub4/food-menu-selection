import React from "react";
import Header from './Header';
import CardData, {
  DataApi
} from './CardData';
//import './index.css';

export default function App() {
  return(
    <>
    <Header /> 
    { DataApi.map(CardData)} 
    </>
  );
}