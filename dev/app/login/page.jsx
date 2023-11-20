import Image from 'next/image'

//components
import LoginForm from '../components/loginform'
import Submitbutton from '../components/submitbutton'

export default function Login() {
  return (

      <LoginForm >
      <Submitbutton buttonname="Login" />

      </LoginForm>
 
  )
}
