'use client'
import Image from 'next/image'
//components
import LoginForm from '../components/loginform'
import Submitbutton from '../components/submitbutton'



export default function Page() {

  return (

      <LoginForm>
      <button type={"submit"} className='bg-tertiary rounded-md p-3 w-32'>
      <span className='text-dark font-bold'>Login</span>
      </button>
      </LoginForm>
 
  )
}
