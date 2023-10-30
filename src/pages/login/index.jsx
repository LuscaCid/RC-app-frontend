
import {Container, Content, Form} from './style'
import { Input } from '../../components/Input'

import {FiUser} from 'react-icons/fi'
import {FiLock} from 'react-icons/fi'


export const Login = ()=>{
    return (
        <Container>
            <Content>
                <Form>
                    <h1>
                        Faça login
                    </h1>
                    <Input 
                    icon= {FiUser} 
                    placeholder= 'Usuário' />
                    <Input 
                    icon= {FiLock} 
                    placeholder= 'Senha' />
                </Form>

            </Content>
            
        </Container>
    )
}