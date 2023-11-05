import {Routes, Route} from 'react-router-dom'
import {Menu} from '../pages/menu'
import {New} from '../pages/New'

export function AppRoutes(){
  return (
    <Routes>
      <Route path='/' element= {<Menu />}/>
      <Route path='/new' element= {<New />}/>
     
    </Routes>
  )
}