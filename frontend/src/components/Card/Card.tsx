import {Container, Content} from "./styles.Card";

interface CardProps {
    name: string;
    description?: string;
    image: string;
}

export function Card({name, description, image}:CardProps) {
    return (
        <Container>
            <img src={image} alt={name} />
            <Content>
                <h2>{name}</h2>
                <p>{description}</p>
            </Content>
        </Container>
    )
}
