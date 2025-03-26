import styled from 'styled-components';

type Props = {
    $isMaxCount?: boolean;
    $justify: string;
    $align?: string;
    $isSetting?: boolean;
    $error?: boolean
}

export const ContentWrapperStyled = styled.div<Props>`
    background-color: transparent;
    border: 2px solid aqua;
    border-radius: 5px;
    color: ${props => (props.$isMaxCount && !props.$isSetting) || props.$error ? 'red' : 'aqua'};
    padding: 10px;
    flex-grow: 1;
    font-size: ${props => props.$isSetting || props.$error ? '40px' : '60px'};
    text-align: center;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.$justify};
    align-items: ${props => props.$align || 'stretch'};
`