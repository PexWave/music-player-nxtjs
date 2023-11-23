import React from 'react'
import utilStyles from '../css/utils.module.css';
import Link from 'next/link';
import { auth } from "../../auth"
import { options } from '../api/auth/[...nextauth]/options';
import { signIn, useSession, signOut } from "next-auth/react"

const name = 'Music Player';
export const siteTitle = 'Music Player';

//components
import Loginlogout from './loginlogout';

export default async function Navbar() {
  const session = await auth();
  return (
    <nav className='w-full flex flex-row'>
    <Link href="/" className='hover:no-underline w-full'>
    <h1 className={utilStyles.heading2Xl + " p-10 " + utilStyles.quaternarycolor}>{name}</h1>
    </Link>

    <div className='relative flex-grow w-full'>

      <Loginlogout session={session} />
    </div>


    </nav>
  )
}
