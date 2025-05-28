import {CounterContent} from './CounterContent.tsx';
import {Button} from '../button/Button.tsx';
import {ButtonsWrapperStyled} from '../styled-components/ButtonsWrapperStyled.ts';
import {WrapperStyled} from '../styled-components/WrapperStyled.ts';
import {useAppSelector} from '../../common/hooks/useAppSelector.ts';
import {selectCounter} from '../../model/counter-selector.ts';
import {incrementCountAC, resetCountAC} from '../../model/counter-reducer.ts';
import {useAppDispatch} from '../../common/hooks/useAppDispatch.ts';

type Props = {
    error: boolean
}

export const Counter = ({error}: Props) => {

    const counter = useAppSelector(selectCounter)
    const dispatch = useAppDispatch()

    const disabledIncButton = counter.count >= counter.maxCount || counter.isSetting || error
    const disabledResetButton = counter.count === counter.startCount || counter.isSetting || error

    const incrementCount = () => {
        dispatch(incrementCountAC())
    }
    const resetCount = () => {
        dispatch(resetCountAC())
    }

    return (
        <WrapperStyled>
            <CounterContent
                error={error}
            />
            <ButtonsWrapperStyled>
                <Button title={'inc'} onClick={incrementCount} disabled={disabledIncButton}/>
                <Button title={'reset'} onClick={resetCount} disabled={disabledResetButton}/>
            </ButtonsWrapperStyled>
        </WrapperStyled>
    );
};