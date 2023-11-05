import {Container} from './style'
import imgLogo from '../../assets/photo1697480913-removebg-preview 1.png'

import { ButtonText } from '../buttonText'
import { Profile } from '../profile'
//import { } from 'react-icons/fi'
import {useAuth} from '../../hooks/auth'


//import { } from 'react-icons/fi'

export function Header () {
    const {user} = useAuth()
    console.log(user)
    return (
        <Container  >
            
            <div id='first-div'>
                <img src={imgLogo} alt="logo da empresa" />
                <ButtonText src="/" title="Home" isActive/>
                <ButtonText src= "new" title="Buscar cliente"/>
                <ButtonText title="Estoque" isActive/>
                <ButtonText title="Cadastrar cliente" />
            </div>
            <div>
                <Profile /> 
                <Profile srcImg ={`https://github.com/${user}`} username={user}/> 
            </div>    
                
               
        </Container>
    )
}