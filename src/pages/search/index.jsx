import { Container, Form, MainContent } from "./style";
import { SideNav } from "../../components/sideNavMenu";
import { Header} from '../../components/header'
import { Button } from "../../components/button";
import { Input } from "../../components/Input";
import { FiUser } from "react-icons/fi";
export const SearchClient = () => { 
    return (
        <Container>
            <Header />
            < SideNav />
            <main>

                <MainContent>
                <Form>
                    <h1>Buscar cliente</h1>
                    <Input 
                    placeholder='Nome...'
                    type='text'
                    icon={FiUser}
                    />
                    <Input 
                    placeholder='CPF...'
                    type='text'
                    icon={FiUser}
                    />
                    <Input 
                    placeholder='Código de identificador...'
                    type='text'
                    icon={FiUser}
                    />
                    <Input 
                    placeholder='Código de ordem de serviço...'
                    type='text'
                    icon={FiUser}
                    />

                </Form>
                <Button 
                
                isForm
                title="Buscar"
                span="cliente" />
            </MainContent>
            </main>
            
            

        </Container>
    )

}