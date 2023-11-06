import { Container, Form, MainContent } from "./style";
import {Input} from '../../components/Input'
import {Textarea} from '../../components/textarea'
import {Header} from '../../components/header'
import {Button} from '../../components/button'
import {FiUser, FiMail, FiPhone } from 'react-icons/fi'
import {HiOutlineIdentification} from 'react-icons/hi2'
import {FaStreetView} from 'react-icons/fa'
export const ClientRegister = (props) =>{

    return (
        <Container>
            <Header />
            <main>
                 <MainContent>
            <Form>
                <h1>Cadastro de cliente</h1>
                <div className="inputs">
                <div>
                    <Input
                    placeholder="Nome"
                    type ="text"
                    icon={FiUser}/>
                    <Input
                    placeholder="CPF"
                    type ="text"
                    icon={HiOutlineIdentification}/>
                    <Input
                    placeholder="Bairro"
                    type ="text"
                    icon={FaStreetView}/>
                </div>    
                <div>
                    <Input
                    placeholder="Telefone"
                    type ="number"
                    icon={FiPhone}/>
                    <Input
                    placeholder="E-mail"
                    type ="text"
                    icon={FiMail}/>
                    <Input
                    placeholder="Endereço"
                    type ="text"
                    icon={FaStreetView}/>
                </div>

                </div>
                <Textarea 
                placeholder='Observações... (opcional)'/>
                    
            </Form>
            <Button 
            isForm 
            title ="Cadastrar"/>

            </MainContent>
            </main>
           
                
        </Container>

    )
}