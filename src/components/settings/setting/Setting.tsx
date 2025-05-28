import {S} from './Setting_Styles.ts';
import {ChangeEvent} from 'react';

type Props = {
    title: string
    value: string
    onChangeInput: (newValue: string) => void
    errorInputMax?: boolean
    errorInputStart?: boolean
    error: boolean
};
export const Setting = ({ title, value, onChangeInput, error }: Props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        if (newValue === '' || !isNaN(Number(newValue))) {
            onChangeInput(newValue);
        }
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


