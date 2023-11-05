import { Container } from "./style";
import { useAuth } from "../../hooks/auth";
export const Profile = () => {
    const {user} = useAuth()
    console.log(user)
    return (
        <Container>
            <img src={`https://github.com/${user}.png`} alt="imagem do usuário" />
            <span>{user}</span>
        </Container>

    )
}