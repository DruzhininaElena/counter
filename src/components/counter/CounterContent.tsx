import {ContentWrapperStyled} from '../styled-components/ContentWrapperStyled.ts';
import {useAppSelector} from '../../common/hooks/useAppSelector.ts';
import {selectCounter} from '../../model/counter-selector.ts';

type Props = {
    error: boolean
};
export const CounterContent = ({ error }: Props) => {

    const counter = useAppSelector(selectCounter)

    const isMaxCount = counter.count === counter.maxCount

    return (
        <ContentWrapperStyled $justify={'center'}
                              $align={'center'}
                              $isMaxCount={isMaxCount}
                              $isSetting={counter.isSetting}
                              $error={error}

        >
            {error && <span>Incorrect value!</span>}
            {!error && !counter.isSetting && <span>{counter.count}</span>}
            {!error && counter.isSetting && <span>enter values and press 'set'</span>}
        </ContentWrapperStyled>
    );
};