"use client";
import React, { useState } from 'react'
import styles from '../css/artistcard.module.css'

export default function Artistcard({artist}) {

  const [clickedArtist, setclickedArtist] = useState(null);



  const handleClick = (event) => {

    // Access the clicked element
    const clickedElement = event.target;

    if (event.target === event.currentTarget) {
    // Add a class to the clicked element
    clickedElement.classList.toggle('bg-gradient-to-r');
    clickedElement.classList.toggle('from-green-400');
    clickedElement.classList.toggle('to-blue-500');

    console.log(clickedElement.dataset.artist);

    }
    // Update state to track the clicked element
    setclickedArtist(clickedElement);
  };



  return (
    <div onClick={handleClick} data-artist={artist} className="flex relative w-64 h-48 flex-col rounded-xl bg-quaternary bg-clip-border text-gray-700 shadow-md">
      
      <div className='absolute p-6 bottom-0'>
      <h5 className='text-xl font-semibold'>{artist}</h5>
      </div>

    </div>
  )
}
