import React from 'react';
//import {React,  useState } from 'react';
import './Parent.css';

function Parent() 
{
let [isLit, setLit] = React.useState(true);
let [isTempDay, setTempDay] = React.useState(30);
let [isTempNight, setTempNight] = React.useState(18);

  return (
    <div className={`${isLit ? "lit" : "dark"}`}>
            Inside a Room Component! 
            <br/>
            The room is {isLit ? 'lit' : 'dark'}
            <br/> <br/>
            The room Temperature is {isLit ? isTempDay : isTempNight}
     
     <br /><br/>
     <button className = "ButtonOn" onClick={() => setLit(isLit=true)}>
       Light On
     </button>
     <button className = "ButtonOff"  onClick={() => setLit(isLit=false)}>
       Light Off
     </button>
     <button className = "DegreeAdd"  onClick={() =>  {isLit ? setTempDay(isTempDay+1) : setTempNight(isTempNight+1)} }>
       Degree add
     </button>
     </div>
  );
}

export default Parent;
