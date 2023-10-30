import {Container} from './style'
import imgLogo from '../../assets/photo1697480913-removebg-preview 1.png'

import { ButtonText } from '../buttonText'
import { Profile } from '../profile'
//import { } from 'react-icons/fi'


export function Header ({src, username}) {
    return (
        <Container>
            <div id='first-div'>
                <img src={imgLogo} alt="logo da empresa" />
                <ButtonText title="HOME" isActive/>
                <ButtonText title="CLIENTE"/>
                <ButtonText title="ESTOQUE" isActive/>
            </div>
            <div>
                <Profile src ={src} username={username}/> 
            </div>    
                
               
        </Container>
    )
}