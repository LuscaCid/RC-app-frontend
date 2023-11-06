import { Container } from "./style";
import { useAuth } from "../../hooks/auth";
export function ButtonText({functions, src, title, isActive}) {
    
    return (
        <Container
        onClick={functions}
        to={src}
        isActive = {isActive}>
            {title}
        </Container>
    )
}