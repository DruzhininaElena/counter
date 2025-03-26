import {ContentWrapperStyled} from '../styled-components/ContentWrapperStyled.ts';

type Props = {
    count: number
    maxValueCount: number
    isSetting: boolean
    error: boolean
};
export const CounterContent = ({count, maxValueCount, isSetting, error}: Props) => {

    const isMaxCount = count === maxValueCount

    return (
        <ContentWrapperStyled $justify={'center'}
                              $align={'center'}
                              $isMaxCount={isMaxCount}
                              $isSetting={isSetting}
                              $error={error}

        >
            {error && <span>Incorrect value!</span>}
            {!error && !isSetting && <span>{count}</span>}
            {!error && isSetting && <span>enter values and press 'set'</span>}
        </ContentWrapperStyled>
    );
};