import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    margin-top: -190px;
    padding-bottom: 2rem;
`;

export const Content = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export const Grid = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2em;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
    h1 {
        color: #F0F0F5;
        font-size: 26px;
    }
`;
