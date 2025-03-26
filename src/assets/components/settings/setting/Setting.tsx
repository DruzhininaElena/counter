import {S} from './Setting_Styles.ts';
import {ChangeEvent} from 'react';

type Props = {
    title: string
    value: number
    onChangeInput: (newValue: number) => void
    errorInputMax?: boolean
    errorInputStart?: boolean
    error: boolean
};
export const Setting = ({ title, value, onChangeInput, error }: Props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeInput(Number(e.currentTarget.value))
    }

    return (
        <S.SettingLabel>
            {title}
            <S.SettingValue type="number"
                            value={value}
                            onChange={onChangeHandler}
                            $error={error}
            />
        </S.SettingLabel>

    );
};


