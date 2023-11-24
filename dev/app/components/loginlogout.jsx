'use client';
import React from 'react'
import { signIn, useSession, signOut } from "next-auth/react"
import Link from 'next/link';

export default function Loginlogout({session}) {
 
  
  return (
    <div>
    {session ? (
          <button onClick={() => signOut({ callbackUrl: 'https://google.com/' })} className='absolute top-0 right-0 p-5 hover:no-underline'>
          <h1 className='text-white font-bold'>Logout</h1>
          </button>
    ) :
    (
      <Link href={'/login'} className='absolute top-0 right-0 p-5 hover:no-underline'>
      <h1 className='text-white font-bold'>Login</h1>
      </Link>
    )}
    </div>
  )
}
