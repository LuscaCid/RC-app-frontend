
import {Container, Content, Form, StyledSide} from './style'
import { Input } from '../../components/Input'
import { Button } from '../../components/button'
import {FiUser} from 'react-icons/fi'
import {FiLock} from 'react-icons/fi'
import logoImg from '../../assets/photo1697480913-removebg-preview 1.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

export const Login = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const { signIn } = useAuth()
    function handleSignIn(e){
        e.preventDefault()
        if(!email || !password) return alert('preencha todos os campos')
        signIn({email, password})
    }
    return (
        <main>

             <Container>
                <Content>
                <Form>
                    <h1>Faça login</h1>

                    <label htmlFor="user">E-mail do usuário</label>
                    <Input 
                    onChange = {(e)=> {setEmail( e.target.value)}}
                    icon= {FiUser} 
                    placeholder= 'E-mail' id="user" 
                    type="text"
                    />

                    <label htmlFor="password">Senha</label>
                    <Input 
                    onChange = {(e)=> {setPassword( e.target.value)}}
                    icon= {FiLock} 
                    placeholder= 'Senha'  
                    id="password"
                    type="password"
                    />
                    <Link to={'/register'}>Criar conta</Link>
                    <Button 
                    functions={handleSignIn}
                    title="Fazer"
                    span = "login"
                    />
                </Form>
                <StyledSide>
                    <div className="logo">
                        <div className="texts">
                            <h1>Robert Capas</h1>
                            <p>Aplicativo de gerenciamento de ordens serviço controle de estoque facilitando o trabalho e agilizando processos.
                            </p>
                        </div>
                        <div className="img">
                        <img src={logoImg} alt="logo robert capas" />
                        </div>
                            
                    </div>

                </StyledSide>
            </Content>
            
        </Container>
        </main>
       
    )
}