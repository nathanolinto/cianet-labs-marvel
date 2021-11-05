import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Card from '../../components/Card';
import Header from "../../components/Header";
import { Container, Content } from "./styles.Home";
import api from "../../services/api";

interface Character {
    id: string;
    name: string;
    description?: string;
    thumbnail: string;
}

export function Home() {
    const [characters, setCharacters] = useState<Character[]>([]);
    useEffect(() => {
        async function fetchData() {
            const results = await api.get("/characters");
            setCharacters(results.data.results);
        }
        fetchData();

    }, []);
    return (
        <>
            <Header />
            <Container>
                <Content>
                    {characters.map(character => (
                        <Link key={character.id} to={`/characters/${character.id}/comics`}>
                            <Card name={character.name} image={character.thumbnail} description={character.description} />
                        </Link>
                    ))}
                </Content>
            </Container>   
        </>
    )
}