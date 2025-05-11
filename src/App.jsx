import React, { use, useRef, useState } from "react";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Userslist from "./Components/Userlist";

const App = () => {
  const [toggler, settoggler] = useState(true);
  const [user, setuser] = useState([]);
  

  return (
    <>
      <div className="w-full h-screen bg-white p-10 flex justify-between">
        {toggler ? (
          <Signup togg={toggler} settogg={settoggler} users={user} setuser={setuser} />
        ) : (
          <Signin togg={toggler} settogg={settoggler} users={user} setuser={setuser}/>
        )}
            <Userslist users={user} setuser={setuser}/>

      </div>

    </>
  );
};

export default App;
