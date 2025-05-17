import React, { createContext, useContext, useState } from 'react'
export const UserContext=createContext();


const Contextuser = (props) =>{
  const [toggler, setToggler] = useState(true);
  const [user, setUser] = useState([]);

  return (
    <UserContext.Provider value={{toggler, setToggler,user, setUser}}>{props.children}</UserContext.Provider>
  )
}

export default Contextuser;