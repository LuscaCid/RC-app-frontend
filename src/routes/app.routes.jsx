import {Routes, Route} from 'react-router-dom'
import { New } from '../pages/New'
import { Menu } from '../pages/menu'
import { Login } from '../pages/login'
import { Profile } from '../pages/profile'


export const AppRoutes = () => {

    return (
        <Routes>

            <Route path='/' element = {<Menu />} />
            <Route path='/new' element = {<New />} />
            <Route path='/login' element = {<Login />} />
            <Route path='/profile' element = {<Profile />} />
           
        </Routes>
    )

}