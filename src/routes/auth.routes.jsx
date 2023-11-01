import {Routes, Route} from 'react-router-dom'

import { Login } from '../pages/login'

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='/' element = {<Login />}/>
        </Routes>
    ) 
}