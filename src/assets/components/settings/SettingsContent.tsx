import {Setting} from './setting/Setting.tsx';
import {ContentWrapperStyled} from '../styled-components/ContentWrapperStyled.ts';

type Props = {
    changeNewMax: (newMaxValue: number) => void
    changeNewStart: (newStartValue: number) => void
    newStart: number
    newMax: number
    errorInputMax: boolean
    errorInputStart: boolean
};
export const SettingsContent = ({newStart, newMax, changeNewMax, changeNewStart, errorInputMax, errorInputStart}: Props) => {
    return (
        <ContentWrapperStyled $justify={'space-around'}>
            <Setting title={'max value:'}
                     value={newMax}
                     onChangeInput={changeNewMax}
                     error={errorInputMax}

            />
            <Setting
                title={'start value:'}
                value={newStart}
                onChangeInput={changeNewStart}
                error={errorInputStart}
            />
        </ContentWrapperStyled>
    );
};