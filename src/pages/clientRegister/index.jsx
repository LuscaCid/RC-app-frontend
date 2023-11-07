import { Container, Form, MainContent } from "./style";
import {Input} from '../../components/Input'
import {Textarea} from '../../components/textarea'
import {Header} from '../../components/header'
import {Button} from '../../components/button'
import {FiUser, FiMail, FiPhone } from 'react-icons/fi'
import {HiOutlineIdentification} from 'react-icons/hi2'
import {FaStreetView} from 'react-icons/fa'
import { useState } from "react";
export const ClientRegister = (props) =>{
    const [cep, setCep] = useState('')

    async function SearchCep(e){
        e.preventDefault()
        const endPoint = `https://viacep.com.br/ws/${cep}/json/`
        const data = await fetch(endPoint)
       
        console.log(data)
        console.log(cep)
    }
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
                    <Input
                    onChange= {e=> {
                        setCep(e.target.value)    
                    }}
                    placeholder="CEP"
                    type ="text"
                    icon={FaStreetView}/>
                </div>    
                <div>
                    <Input
                    placeholder="Telefone"
                    type ="number"
                    icon={FiPhone}/>
                    
                    <Input
                    placeholder="Endereço"
                    type ="text"
                    icon={FaStreetView}/>
                    <Input
                    placeholder="Cidade"
                    type ="text"
                    icon={FaStreetView}/>
                    <Button 
                    functions={SearchCep}
                    title='Pesquisar' 
                    span='CEP'
                    />
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