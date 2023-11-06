import {Container, LinkContainer} from './style'
import imgLogo from '../../assets/photo1697480913-removebg-preview 1.png'

import { ButtonText } from '../buttonText'
import { Profile } from '../profile'
//import { } from 'react-icons/fi'
import {useAuth} from '../../hooks/auth'
import { Link } from 'react-router-dom'
import {LogoutButton } from '../logoutButton'

//import { } from 'react-icons/fi'

export function Header () {
    const {user, signOut} = useAuth()
    
    return (
        <Container  >
            
            <LinkContainer to='/'>
                <img src={imgLogo} alt="logo da empresa" />
            </LinkContainer>
            
           
            <div>
                
            <Profile /> 
            <LogoutButton /> 
            </div>    
                
               
        </Container>
    )
}