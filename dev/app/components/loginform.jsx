
import React from 'react'
import {useState} from 'react'
import { signIn, useSession, signOut } from "next-auth/react"

//components
import ForgotPassBtn from './forgotpass'
import Signupbtn from './signupbtn'


export default function Loginform({children}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e) => {
    e.preventDefault() ;
    signIn('credentials',
      {
        username: username,
        password: password,
        // The page where you want to redirect to after a 
        // successful login
        callbackUrl: `https://localhost:3000/` 
      }
    )
  }





  return (
    <div className="container mx-auto">
      <div className = "flex flex-col items-center justify-center">

        <form onSubmit={handleLogin} className="grid grid-flow-row bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 gap-2 w-96">

          <input onChange={(e) => setUsername(e.target.value)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" value={username} type="text" placeholder="Username or email" />

          
          <input onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" value={password} type="text" placeholder="Password" />
          
          <div className="flex items-center justify-center">
          {children}
          </div>

          <div className="flex items-center justify-center">
          <ForgotPassBtn />
          </div>

          <div className="flex items-center justify-center">
          <h3 className=''>Don't have an account?</h3>
          </div>


          <div className="flex items-center justify-center">
          <Signupbtn />
          </div>
          
        </form>
      </div>
    </div>
  )
}
