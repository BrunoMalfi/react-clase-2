import React, { useState, useEffect } from "react";

const Name = () => {
    const [name, setName] = useState('Sofi');
    const changeNameData=()=>{setName("Data")}
    const changeNameReyes=()=>{setName("Reyes")}
    const changeNameYolanda=()=>{setName("Yolanda")}
  return (
    <div>
    <ul>
        <li onClick={changeNameData}>Data</li>
        <li onClick={changeNameReyes}>Reyes</li>
        <li onClick={changeNameYolanda}>Yolanda</li>
  </ul>
  <h2> Teacher Name :  {name}</h2>
  </div>
);
};

export default Name;