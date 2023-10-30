
import {Container, Content, Form, StyledSide} from './style'
import { Input } from '../../components/Input'
import { Button } from '../../components/button'
import {FiUser} from 'react-icons/fi'
import {FiLock} from 'react-icons/fi'
import logoImg from '../../assets/photo1697480913-removebg-preview 1.png'

export const Login = ()=>{
    return (
        <Container>
            <Content>
                <Form>
                    <h1>Faça login</h1>

                    <label htmlFor="user">Nome de usuário</label>
                    <Input 
                    icon= {FiUser} 
                    placeholder= 'Usuário' id="user" 
                    type="text"
                    />

                    <label htmlFor="password">Senha</label>
                    <Input 
                    icon= {FiLock} 
                    placeholder= 'Senha'  
                    id="password"
                    type="password"
                    />
                    <a href="/">Esqueci a senha</a>
                    <Button 
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
                        <img src={logoImg} alt="logo rober capas" />
                        </div>
                            
                    </div>

                </StyledSide>
            </Content>
            
        </Container>
    )
}