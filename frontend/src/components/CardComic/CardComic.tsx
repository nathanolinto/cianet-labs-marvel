import {Container, Content} from "./styles.CardComic";

interface CardComicProps {
    title: string;
    description?: string;
    variantDescription: string;
    image: string;
    pageCount: number;
}

export function CardComic({title, variantDescription, description, pageCount, image}:CardComicProps) {
    return (
        <Container>
            <img src={image} alt={title} />
            <Content>
                <h2>{title}</h2>
                <p><span>Páginas</span>: {pageCount}</p>
                <p><span>Descrição</span>: {description}</p>
                <p><span>Descrição Alternativa</span>: {variantDescription}</p>
            </Content>
        </Container>
    )
}
