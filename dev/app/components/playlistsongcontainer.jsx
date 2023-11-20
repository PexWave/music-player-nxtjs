import React from 'react'
import styles from '../css/playlistsongs.module.css';

export default function playlistsongcontainer() {
  return (
    <div className={styles.container + " sm:w-full  overflow-y-scroll top-0"}>

<div className='mx-10 mt-10 flex flex-row rounded-md px-10 text-tertiary justify-between'>
        
        <div className='flex flex-row gap-4'>

          <div className=''>
            #
          </div>

          <div>
          Title
          </div>


        </div>


        <div className='mr-6'>
          Time
        </div>

      </div>

    
      <div className='mx-10 flex flex-row hover:bg-secondary rounded-md p-10 text-tertiary justify-between'>

        <div className='flex flex-row gap-4'>

          <div className=''>
            1
          </div>

           <div>
          Wonderland
          </div>


        </div>


        <div className='mr-6'>
          3:41
        </div>

      </div>
    </div>
  )
}
