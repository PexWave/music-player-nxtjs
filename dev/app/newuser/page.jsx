import React from 'react'
import styles from '../css/userpreferences.module.css'
import Artistcard from '../components/artistcard'
import Dynamicbutton from '../components/dynamicbutton'

export default function Page() {
  return (
    <div className=''>
      <h3 className="mb-2 ml-5 block text-4xl leading-snug tracking-normal text-quaternary antialiased">Choose your artist</h3>
        <div className={styles.container + " relative"}>
          <Artistcard song={"Beat it"} artist={"Michael Jackson"} />

          <div className='absolute bottom-20 right-0 mb-5 p-5'>
            <Dynamicbutton href={"/"} text={"My playlists"} />
          </div>
        </div>
    </div>
  )
}
