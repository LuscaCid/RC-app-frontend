import { Container, Form } from "./style";
import { Input } from "../../components/Input";
import {FiArrowLeft, FiLock, FiMail, FiUser} from 'react-icons/fi'
import {FiPower} from 'react-icons/fi'
import { Link } from "react-router-dom";
import { Button } from '../../components/button'
import { LogoutButton } from "../../components/logoutButton";
export const Profile = () => {
    return (
        <Container>
            <header>
                <Link to='/'>
                    <FiArrowLeft size={40} color="white"/>
                </Link>
                <Link to='/'>
                    <LogoutButton /> 
                
                </Link>
            </header>
                <div className="img">
                    <img src="https://github.com/luscacid.png" alt="" />
                </div>
                <input type="file"  />
            
            <Form>
                <h1>Editar</h1>
                <Input placeholder= "nome" icon ={FiUser} />
                <Input placeholder= "E-mail" icon ={FiMail} />
                <Input placeholder= "Senha atual" icon ={FiLock} />
                <Input placeholder= "Nova senha" icon ={FiLock}/>
                <Button 
                title = "salvar"
                span = "alterações"
                />
            </Form >
        </Container>

    )
}