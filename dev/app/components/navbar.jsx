import React from 'react'
import utilStyles from '../css/utils.module.css';
import Link from 'next/link';


const name = 'Music Player';
export const siteTitle = 'Music Player';


export default function Navbar() {
  return (
    <nav className='w-full flex flex-row'>
    <Link href="/" className='hover:no-underline w-full'>
    <h1 className={utilStyles.heading2Xl + " p-10 " + utilStyles.quaternarycolor}>{name}</h1>
    </Link>

    <div className='relative flex-grow w-full'>
    <Link href="/" className='absolute top-0 right-0 p-5 hover:no-underline'>
    <h1 className='text-white font-bold'>Logout</h1>
    </Link>
    </div>


    </nav>
  )
}
