'use client';

import React from 'react'
import Link from 'next/link';

import Submitbutton from '../components/submitbutton'
export default function page({children}) {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [message, setMsg] = React.useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('all fields are required');
      return;
    }

    try {
      const res = await fetch('api/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      });

      if(res.ok) {
        const form = e.target.reset();
        setMsg('Registration successful');
      }
    } catch (error) {
      console.log("error during registration");
    }
  }


  return (
    <div className="container mx-auto">
      <div className = "flex flex-col items-center justify-center">

        <form onSubmit={handleRegistration} className="grid grid-flow-row bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 gap-2 w-96">

          <input onChange={(e) => setUsername(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" placeholder="Username or email" />

          
          <input onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="password" placeholder="Password" />
          
          { error && (
          <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
            {error}
          </div>)}

          { message && (
          <div className='bg-green-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
            {message}
          </div>)}


          <div className="flex items-center justify-center">
          <Submitbutton buttonname={"Register"} />
          </div>

          <div className="flex items-center justify-center">
          <h3 className=''>have an account?</h3>
          </div>


          <div className="flex items-center justify-center">
          <Link href="/login">
              <span className='text-dark font-bold'>Sign in</span>
          </Link>
          </div>
          
        </form>
      </div>
    </div>
  )
}
