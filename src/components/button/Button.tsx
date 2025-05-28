import {S} from './Button_Styles.ts';

type Props = {
    title: string;
    onClick: () => void
    disabled: boolean
};
export const Button = ({title, onClick, disabled}: Props) => {
    return (
        <S.ButtonStyled onClick={onClick} disabled={disabled}>{title}</S.ButtonStyled>
    );
};