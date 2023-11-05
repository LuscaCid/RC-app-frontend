
import {Container, Content, Form, StyledSide} from './style'
import { Input } from '../../components/Input'
import { Button } from '../../components/button'
import {FiUser, FiLock, FiMail} from 'react-icons/fi'

import logoImg from '../../assets/photo1697480913-removebg-preview 1.png'

import { Link } from 'react-router-dom'
import { useState } from 'react'
export const SignUp = ()=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container>
            <Content>
                
                <StyledSide>
                    <div className="logo">
                        <div className="texts">
                            <h1>Robert Capas</h1>
                            <p>Aplicativo de gerenciamento de ordens serviço controle de estoque facilitando o trabalho e agilizando processos.
                            </p>
                        </div>
                        <div className="img">
                        <img src={logoImg} alt="logo rober capas" />
                        </div>
                            
                    </div>

                </StyledSide>
                <Form>
                    <h1>Cadastre-se</h1>

                    <label htmlFor="user">Nome de usuário</label>
                    <Input 
                    onChange = {(e)=> setName(e.target.value)}
                    icon= {FiUser} 
                    placeholder= 'Usuário' id="user" 
                    type="text"
                    />

                    <label htmlFor="email">E-mail</label>
                    <Input 
                    onChange = {(e)=> setEmail(e.target.value)}
                    icon= {FiMail} 
                    placeholder= 'E-mail' id="email" 
                    type="text"
                    />

                    <label htmlFor="password">Senha</label>
                    <Input
                    onChange = {(e)=> setPassword(e.target.value)} 
                    icon= {FiLock} 
                    placeholder= 'Senha'  
                    id="password"
                    type="password"
                    />
                    <Link to='/'>Voltar para o login</Link>
                    <Button 
                    title="cadastrar"
                    span = "conta"
                    />
                </Form>
            </Content>
            
        </Container>
    )
}