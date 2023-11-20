import React from 'react'
import styles from '../css/playlist.module.css';
import Link from 'next/link'

import Playlistcard from './playlistcard';


export default function Playlists() {
  return (
    <div className=''>
      <h1 className='text-3xl text-quaternary font-bold ml-5 my-5'>My Playlists</h1>
      <div className={styles.container}>
        <Link className='hover:no-underline' href={`/playlist/${"myplaylist"}`}>
        <Playlistcard />
        </Link>
      
        
      </div>
    </div>
  )
}
