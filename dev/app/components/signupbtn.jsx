import React from 'react'
import Link from 'next/link';

export default function Signupbtn() {
  return (
    <Link href="/register">
      <span className='text-dark font-bold'>Sign up</span>
    </Link>
  )
}
