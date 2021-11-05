import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    margin-top: -150px;
    padding-bottom: 2rem;
`;

export const Content = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2em;
`;