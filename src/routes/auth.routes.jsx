
import {Route, Routes} from 'react-router-dom'
import {Login} from '../pages/login'
import {SignUp} from '../pages/signUp'
export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/' element = {<Login/>} />
      <Route path='/register' element = {<SignUp />} />
    </Routes>
  )
  }