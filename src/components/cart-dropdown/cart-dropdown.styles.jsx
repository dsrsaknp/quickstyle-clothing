import styled from 'styled-components';
import {
    DefaultButton,
    GoogleSignInButton,
    InvertedButton
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    /* Nested styled component*/
    ${DefaultButton},
    ${InvertedButton},
    ${GoogleSignInButton} {
        margin-top: auto;
      }
`

export const CartItems = styled.div`
    position: absolute;
    height: 280px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
`

export const EmptyMessage = styled.div`
    font-size: 18px;
    margin: 50px auto;
`