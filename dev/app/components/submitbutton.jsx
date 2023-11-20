import React from 'react'

export default function Submitbutton({ buttonname }) {
  return (
    <button className='bg-tertiary rounded-md p-3 w-32'>
      <span className='text-dark font-bold'>{buttonname}</span>
    </button>
  )
}
