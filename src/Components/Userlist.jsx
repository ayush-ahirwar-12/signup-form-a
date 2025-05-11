import React from 'react'
import { RxCross2 } from "react-icons/rx";


const Userslist = ({users,setuser}) => {
    const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setuser(updatedUsers);
  };

    
  return (
    <div className='w-[25%] h-full p-8 flex flex-col items-center'>
      {users.length===0 ? "" : <h1 className='text-2xl mt-3'>Current Users</h1> }
        {users.length===0 ? ( <h1 className='text-3xl text-red-500 text-center'>No User Found!</h1> ) : (users.map((val,index)=>( <div key={val.id} className='w-fit bg-black rounded p-3 mt-5 flex items-center gap-10 text-white'>
          <div>
            <h1 className='text-2xl font-bold'>{val.name}</h1>
            <h3 className='text-xs'>{val.email}</h3>
            </div>
            <div>
                 <button onClick={() => handleDelete(val.id)}><RxCross2 className='text-white bg-red-700 rounded-full text-lg'/></button> 

            </div>

        </div> )))}

        
    </div>
  )
}

export default Userslist
