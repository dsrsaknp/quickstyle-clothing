import styled from 'styled-components';

export const BaseButton = styled.button`
    min-width: 165px;
    width: 100%;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 10px 0;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`

export const DefaultButton = styled(BaseButton)`
    background-color: rgb(76, 75, 75);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(179, 179, 179);

    &:hover {
        background-color: rgb(95, 94, 94);
        color: white;
        border: none;
    }
`