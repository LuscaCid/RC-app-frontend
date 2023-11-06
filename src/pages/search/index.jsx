import { Container, Form, MainContent } from "./style";
import { Header} from '../../components/header'
import { Button } from "../../components/button";
import { Input } from "../../components/Input";
import { FiUser } from "react-icons/fi";
export const SearchClient = () => { 
    return (
        <Container>
            <Header />
            <MainContent>
                <Form>
                    <h1>Buscar cliente</h1>
                    <Input 
                    placeholder=''
                    type='text'
                    icon={FiUser}
                    />
                    <Input 
                    placeholder=''
                    type='text'
                    icon={FiUser}
                    />
                    <Input 
                    placeholder=''
                    type='text'
                    icon={FiUser}
                    />
                    <Input 
                    placeholder=''
                    type='text'
                    icon={FiUser}
                    />

                </Form>
                <Button 
                
                isForm
                title="Buscar"
                span="cliente" />
            </MainContent>

        </Container>
    )

}