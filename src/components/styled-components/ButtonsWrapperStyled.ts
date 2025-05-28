import styled from 'styled-components';

export const ButtonsWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid aqua;
    border-radius: 5px;
    padding: 10px;
    gap: 30px;
    
    @media screen and (max-width: 575px) {
        gap: 10px;
    }
`
