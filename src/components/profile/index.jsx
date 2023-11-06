import { Link } from "react-router-dom";
import { Container } from "./style";
import { useAuth } from "../../hooks/auth";
export const Profile = () => {
    const {user} = useAuth()
    return (
        <Container to= "/profile">
            <img src={`https://github.com/${user}.png`} alt="imagem do usuário" />
            <span>{user}</span>
        </Container>

    )
}