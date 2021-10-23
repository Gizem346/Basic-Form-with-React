import styled from 'styled-components';

export const StyledContainer = styled.div`
    border: 15px solid black;
    background-color: #22223b ;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const Title = styled.h1`
    font-weight: bold;
    color: white;
    padding: 2rem;
`
export const StyleInput = styled.input`
    margin: 7px;
    padding: 8px;

`

export const Button = styled.button`
    padding: 8px;
    background-color: #4a4e69;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin: 10px;
    &:hover {
        background-color: white;   
    }
`

export const Foot = styled.p`
    color: white;
`