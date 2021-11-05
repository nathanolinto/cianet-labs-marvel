import { Link } from "react-router-dom";
import {Container, Content} from "./styles.Header";

export function Header() {
    return (
        <Container>
            <Content>
                <Link to="/">
                    <h1>Cianet Labs - Marvel</h1>
                </Link>
            </Content>
        </Container>
    )
}
