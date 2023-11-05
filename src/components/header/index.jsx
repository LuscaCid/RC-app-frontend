import {Container} from './style'
import imgLogo from '../../assets/photo1697480913-removebg-preview 1.png'

import { ButtonText } from '../buttonText'
import { Profile } from '../profile'
//import { } from 'react-icons/fi'
import {useAuth} from '../../hooks/auth'

export function Header () {
    const {data} = useAuth()
    console.log(data)
    return (
        <Container  >
            
            <div id='first-div'>
                <img src={imgLogo} alt="logo da empresa" />
                <ButtonText title="HOME" isActive/>
                <ButtonText title="CLIENTE"/>
                <ButtonText title="ESTOQUE" isActive/>
            </div>
            <div>
                <Profile /> 
            </div>    
                
               
        </Container>
    )
}