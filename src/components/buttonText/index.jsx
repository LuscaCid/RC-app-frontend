import { Container } from "./style";

export function ButtonText({src, title, isActive}) {
    return (
        <Container 
        to={src}
        isActive = {isActive}>
            {title}
        </Container>
    )
}