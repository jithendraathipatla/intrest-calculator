import React,{useState} from 'react';
import 'bulma/css/bulma.css';
const History = () => {
   
    const value = localStorage.getItem("saveData");
    return (
        <div className="card">
        <h1>Response in localStorage: </h1>
            <p>Principle is : {value} </p>
            
        </div>
    );
};

export default History;