import React from 'react'
import Link from 'next/link';

export default function ForgotPassBtn() {
  return (
    <Link href="/login/forgotpassword">
      <span className='text-dark font-bold'>Forgot Password</span>
    </Link>
  )
}
