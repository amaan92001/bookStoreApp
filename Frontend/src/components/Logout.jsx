import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'


const Logout = () => {
   const [authUser, setAuthUser] = useAuth()
   const handleLogaut=()=>{
    try{
        setAuthUser({
            ...authUser,
            // local sorage se aaraha ye user
            user:null
        })
        localStorage.removeItem("users")
        toast.success("Logout Successfully")
        window.location.reload()
       

    }catch(errors){
        toast.error("Error:",errors)
    }
   }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 rounded-md cursor-pointer' onClick={handleLogaut}>Logout</button>
    </div>
  )
}

export default Logout
