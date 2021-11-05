import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import CardComic from '../../components/CardComic';
import Header from "../../components/Header";
import { Container, Content, Grid, Title } from "./styles.Comics";
import api from "../../services/api";

interface Character {
    id: string;
    name: string;
    description?: string;
    thumbnail: string;
}

interface Comic {
    id: string;
    title: string;
    variant_description: string;
    description: string;
    page_count: number;
    thumbnail: string;
}

interface CharacterParams {
    id: string;
}

export function Comics() {
    const params = useParams<CharacterParams>();
    const [character, setCharacter] = useState<Character>();
    const [comics, setComics] = useState<Comic[]>();
    useEffect(() => {
        async function fetchData() {
            const results = await api.get(`/characters/${params.id}/comics`);
            const resultCharacter = await api.get(`/characters/${params.id}`);
            console.log(resultCharacter.data.character)
            setCharacter(resultCharacter.data.character)
            setComics(results.data.results);
        }
        fetchData();

    }, []);
    return (
        <>
            <Header />

            <Container>

                <Content>
                    <Title>
                        <h1>{character?.name} Comics</h1>
                    </Title>
                    <Grid>
                        {comics?.map(comic => (
                            <CardComic
                                key={comic.id}
                                title={comic.title}
                                image={comic.thumbnail}
                                description={comic.description}
                                variantDescription={comic.variant_description}
                                pageCount={comic.page_count}
                            />
                        ))}
                    </Grid>
                </Content>
            </Container>
        </>
    )
}