import { Container } from "./style";

export function ButtonText({title, isActive}) {
    return (
        <Container isActive = {isActive}>
            {title}
        </Container>
    )
}