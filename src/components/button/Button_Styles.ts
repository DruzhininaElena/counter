import styled from 'styled-components';

const ButtonStyled = styled.button`
    background-color: aqua;
    border-radius: 5px;
    padding: 5px 20px;
    color: #3c3c3c;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    
    &:disabled {
        background-color: rgba(0, 255, 255, 0.5);
        &:active {
            background-color: rgba(0, 255, 255, 0.5);
            color: #3c3c3c;
        }
    }
    
    &:active {
        background-color: #3c3c3c;
        color: aqua;
    }

    @media screen and (max-width: 575px) {
        padding: 10px;
    }
`

export const S = {
    ButtonStyled
}