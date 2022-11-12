import { useState, useEffect } from "react";
export const useLocalStorage = (initialState={})=> {
const [localStorage, setLocalStorage] = useState(initialState);
//{firstName, lastName, age}
useEffect(()=> {
  for(let key in localStorage) {
      window.localStorage.setItem(key, localStorage[key]);
  }
}, [localStorage])
return {setLocalStorage}
};