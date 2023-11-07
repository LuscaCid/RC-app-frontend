import {Container, LinkContainer, BurguerButton } from './style'
import imgLogo from '../../assets/photo1697480913-removebg-preview 1.png'
import {FiMenu} from 'react-icons/fi'
import { Profile } from '../profile'
//import { } from 'react-icons/fi'
import {useAuth} from '../../hooks/auth'
import { Link } from 'react-router-dom'
import {LogoutButton } from '../logoutButton'
import { SideNav } from '../sideNavMenu'
import { useState } from 'react'
//import { } from 'react-icons/fi'

export function Header () {
    const {user, signOut} = useAuth()
    let {isVisible , setIsVisible} = useAuth()
    let [flag, setFlag] = useState(true)
    return (
        <Container  >
            <div>
            <BurguerButton onClick={()=>isVisible ? setIsVisible(false) : setIsVisible(true)}>
                <FiMenu size={30} color='white' />
            </BurguerButton>
            <LinkContainer to='/'>
                <img src={imgLogo} alt="logo da empresa" />
            </LinkContainer>
            
            </div>
           
            <div>
                
            <Profile /> 
            <LogoutButton /> 
            </div>    
                
               
        </Container>
    )
}