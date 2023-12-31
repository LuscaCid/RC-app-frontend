import { Container, Form, MainContent } from "./style";
import {Input} from '../../components/Input'
import {Textarea} from '../../components/textarea'
import {Header} from '../../components/header'
import {Button} from '../../components/button'
import { SideNav } from "../../components/sideNavMenu";
import {FiUser, FiMail, FiPhone } from 'react-icons/fi'
import {HiOutlineIdentification} from 'react-icons/hi2'
import {FaStreetView} from 'react-icons/fa'
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
export const ClientRegister = () =>{
    const navigate = useNavigate()
    //automacao do preenchimento do endereco na aplicacao
    const [data , setData] = useState('') 

    //area de informacoes que serao envidas para cadastro de cliente no banco de dados
    const [cep, setCep] = useState('')
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [phone, setPhone] = useState('')
    const [obs, setObs] = useState('')
    const [valueOfInputCity, setCity] = useState('')
    const [valueOfInputNeigh, setNeigh] = useState('')
    const [valueOfInputStreet, setStreet] = useState('')

    async function registerButton(e) {
        e.preventDefault()
        
        
        const response = await api.post('/client/register', { 
            cep,
            name,
            cpf,
            phone,
            obs,
            city : valueOfInputCity,
            street : valueOfInputStreet,
            neighborhood : valueOfInputNeigh
        })
        .then(()=> {
            alert(`Cliente ${name} cadastrado no sistema`)
            navigate('/new')
        })
        .catch(e => {
            if(e.response)return alert(e.response.data.message)
            alert('Não foi possivel cadastrar o cliente')
        })
        console.log(response)

    }


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
            <SideNav/>  
            <main>
                 <MainContent>
            <Form>
                <h1>Cadastro de cliente</h1>
                <div className="inputs">
                <div>
                    <Input
                    onChange = {(e)=> {setName(e.target.value)}}
                    placeholder="Nome"
                    type ="text"
                    icon={FiUser}/>
                    <Input
                    onChange = {(e)=> {setCpf(e.target.value)}}
                    placeholder="CPF"
                    type ="text"
                    icon={HiOutlineIdentification}/>
                   
                    <Input
                    onChange = {(e)=> {setNeigh(e.target.value)}}
                    id = "neigh"
                    placeholder="Bairro"
                    type ="text"
                    icon={FaStreetView}/>
                    <Input
                    onChange= {e=> {setCep(e.target.value)}}
                    placeholder="CEP"
                    type ="text"
                    icon={FaStreetView}/>
                </div>    
                <div>
                    <Input
                    onChange = {e => setPhone(e.target.value)}
                    placeholder="Telefone"
                    type ="number"
                    icon={FiPhone}/>
                    
                    <Input
                    onChange = { e=> setStreet(e.target.value)}
                    id = "street"
                    placeholder="Endereço"
                    type ="text"
                    icon={FaStreetView}/>
                    <Input
                    onChange = {e => setCity(e.target.value)}
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
                onChange = {e => setObs(e.target.value)}
                placeholder='Observações... (opcional)'/>
                    
            </Form>
            
            <Button
            functions  ={registerButton} 
            isForm 
            title ="Cadastrar"/>
            
            </MainContent>
            </main>
           
                
        </Container>

    )
}