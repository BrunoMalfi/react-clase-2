import React, { useState, useEffect } from "react";
import axios from 'axios'
const api= axios.create({
  baseURL: "https://swapi.dev/api/"
})

const Characters = () => {
    const [character, setCharacter] = useState([]);

    //const handleRemove = () => setShow(false);
    const getCharacters = async () => {
        try {
          const res = await api.get('people/');
          setCharacter( res.data.results)
        } catch (error) {
          console.error('Error getting characters:', error);
        }
      };
      useEffect(()=>{
        getCharacters()
      },[])  

    return (
      <div>
        {character.map((character=>{
           return  <p>{character.name}</p>
            }))}
      </div>
    );
  };
  export default Characters;