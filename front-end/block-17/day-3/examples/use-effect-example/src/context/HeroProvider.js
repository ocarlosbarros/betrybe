import React, { useEffect, useState } from 'react';
import HeroContext from "./HeroContext"
import fetchApi from "../services/fetchApi";
function HeroProvider({ children }){
  const contextValue = { }
  const [heroes, setHeroes] = useState([]);
  
  useEffect(() => {
    fetchApi('batman').then((heroList) => console.log(heroList))
  },[])

  return (
    <HeroContext.Provider value={ contextValue }>
      { children }
    </HeroContext.Provider>
  );
}

export default HeroProvider