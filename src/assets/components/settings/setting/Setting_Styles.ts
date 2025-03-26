import styled from 'styled-components';

type Props = {
    $error: boolean
}

const SettingLabel = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
`
const SettingValue = styled.input<Props>`
    outline: ${props => props.$error ? '2px solid red' : '2px solid aqua'};
    border-radius: 5px;
    background-color: ${props => props.$error ? '#ffe1eb' : 'white'};
    color: #3c3c3c;
    padding: 10px;
`

export const S = {
    SettingLabel,
    SettingValue
}