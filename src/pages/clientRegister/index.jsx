import { Container, Form, MainContent } from "./style";
import {Input} from '../../components/Input'
import {Textarea} from '../../components/textarea'
import {Header} from '../../components/header'
import {Button} from '../../components/button'
import {FiUser, FiMail, FiPhone } from 'react-icons/fi'
import {HiOutlineIdentification} from 'react-icons/hi2'
import {FaStreetView} from 'react-icons/fa'
import { useEffect, useState } from "react";
export const ClientRegister = (props) =>{
    
    //automacao do preenchimento do endereco na aplicacao
    const [cep, setCep] = useState('')
    const [data , setData] = useState('')
    const [valueOfInputCity, setCity] = useState('')
    const [valueOfInputNeigh, setNeigh] = useState('')
    const [valueOfInputStreet, setStreet] = useState('')

    async function SearchCep(e){
        e.preventDefault()
        const endPoint = `https://brasilapi.com.br/api/cep/v1/${cep}`
        const response = await fetch(endPoint).then(data => data.json())
        console.log(response)
        setData(response)
        setCity(response.city)
        setNeigh(response.neighborhood)
        setStreet(response.street)
        console.log(valueOfInputCity)
    }
    useEffect(()=> {
        document.getElementById('city').value = valueOfInputCity
        document.getElementById('street').value = valueOfInputStreet
        document.getElementById('neigh').value = valueOfInputNeigh
    }, [data])
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
                    id = "neigh"
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
                    id = "street"
                    placeholder="Endereço"
                    type ="text"
                    icon={FaStreetView}/>
                    <Input
                    id = "city"
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