import { Container, Form } from "./style";
import {Input} from '../../components/Input'

import {FiUser} from 'react-icons/fi'
export const ClientRegister = (props) =>{

    return (
        <Container>
            <main>
                <Input
                placeholder="nome"
                type ="text"
                icon={FiUser}/>
            </main>
        </Container>

    )
}