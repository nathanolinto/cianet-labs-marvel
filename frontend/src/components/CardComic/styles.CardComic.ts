import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    background-color: #E4E4EB;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    img {
        width: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    color: #3D3D4D;
    h2{
        display: flex;
        padding: 1rem;
        font-size: 20px;
        background-color: #F0F0F5;
    }
    p {
        padding: 0.5rem 1rem;
        font-size: 14px;
        background-color: #E4E4EB;
        span {
            font-weight: 600;
        }
    }
`;