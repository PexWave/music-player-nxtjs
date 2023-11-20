import React from 'react'
import Link from 'next/link';

export default function Dynamicbutton({href,text}) {
  return (
    <Link href={href}>
      <span className='text-dark font-bold'>{text}</span>
    </Link>
  )
}
