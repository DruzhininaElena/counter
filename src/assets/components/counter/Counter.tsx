import {CounterContent} from './CounterContent.tsx';
import {Button} from '../button/Button.tsx';
import {ButtonsWrapperStyled} from '../styled-components/ButtonsWrapperStyled.ts';
import {WrapperStyled} from '../styled-components/WrapperStyled.ts';

type Props = {
    maxCount: number
    isSetting: boolean
    count: number
    incrementCount: () => void
    resetCount: () => void
    error: boolean
    startCount: number
}

export const Counter = ({ maxCount, isSetting, count, incrementCount, resetCount, error, startCount }: Props) => {


    const disabledIncButton = count >= maxCount || isSetting || error
    const disabledResetButton = count === startCount || isSetting || error


    return (
        <WrapperStyled>
            <CounterContent count={count}
                            maxValueCount={maxCount}
                            isSetting={isSetting}
                            error={error}
            />
            <ButtonsWrapperStyled>
                <Button title={'inc'} onClick={incrementCount} disabled={disabledIncButton}/>
                <Button title={'reset'} onClick={resetCount} disabled={disabledResetButton}/>
            </ButtonsWrapperStyled>
        </WrapperStyled>
    );
};