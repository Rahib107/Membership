import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate()
  const {user,logout} = UserAuth();
  const handlelogout =async()=>{
    try{
      await logout()
      navigate('/')
      console.log("you are logged out")

    }catch(e) {
      console.log(e.message)

    }

  }
  return (
    <div>
      <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>Account</h1>
      <p>User Email: {user && user.email}</p>

      <button onClick={handlelogout} className='border px-6 py-2 my-4'>
        Logout
      </button>
    </div>
    </div>
  )
}

export default Account
