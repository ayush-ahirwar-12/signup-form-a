import React, { use, useContext, useRef, useState } from "react"
import Signup from "./Components/Signup"
import Signin from "./Components/Signin"
import Userslist from "./Components/Userlist"
import { UserContext } from "./Context/Contextuser"

const App = () => {
    const { toggler} = useContext(UserContext);
  return (
    <>
      <div className="w-full h-screen bg-white p-10 flex justify-between">
        {toggler ? (
          <Signup />
        ) : (
          <Signin />
        )}
            <Userslist />

      </div>

    </>
  )
}

export default App
