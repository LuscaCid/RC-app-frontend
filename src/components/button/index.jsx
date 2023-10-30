import { Container } from "./style";

export const Button = ({title, span}) => {
    return (
        <Container span={span}>
            {title}
            <span>
            {span}
            </span>
        </Container>

    )
}