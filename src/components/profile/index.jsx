import { Link } from "react-router-dom";
import { Container } from "./style";
import { useAuth } from "../../hooks/auth";
export const Profile = () => {
    const {user} = useAuth()
    return (
        <Container to= "/profile">
            <span>{user.name}</span>
            <img src={`https://github.com/${user.name}.png`} alt="imagem do usuário" />
        </Container>

    )
}