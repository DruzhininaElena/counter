import {Button} from '../button/Button.tsx';
import {ButtonsWrapperStyled} from '../styled-components/ButtonsWrapperStyled.ts';
import {WrapperStyled} from '../styled-components/WrapperStyled.ts';
import {SettingsContent} from './SettingsContent.tsx';
import {useState} from 'react';
import {useAppSelector} from '../../common/hooks/useAppSelector.ts';
import {selectCounter} from '../../model/counter-selector.ts';
import {useAppDispatch} from '../../common/hooks/useAppDispatch.ts';
import {changeIsSettingsAC, changeMaxCountAC, changeStartCountAC} from '../../model/counter-reducer.ts';

type Props = {
    setError: (error: boolean) => void
    error: boolean
};
export const Settings = ({ setError, error }: Props) => {

    const counter = useAppSelector(selectCounter)
    const dispatch = useAppDispatch()

    const [newMax, setNewMax] = useState<string>(counter.maxCount.toString())
    const [newStart, setNewStart] = useState<string>(counter.startCount.toString())
    const [errorInputMax, setErrorInputMax] = useState(false)
    const [errorInputStart, setErrorInputStart] = useState(false)



    let isCorrectInputValue: boolean

    const toggleError = () => {
        if (!isCorrectInputValue) {
            setError(true)
            dispatch(changeIsSettingsAC({isSetting: false}))
        } else {
            setError(false)
            dispatch(changeIsSettingsAC({isSetting: true}))
            setErrorInputStart(false)
            setErrorInputMax(false)
        }
    }

    const changeNewMax = (newMaxValue: string) => {
        setNewMax(newMaxValue)

        isCorrectInputValue = Number(newMaxValue) > Number(newStart) && Number(newStart) >= 0

        toggleError()

        if (Number(newMaxValue) <= Number(newStart)) {
            setErrorInputStart(true)
            setErrorInputMax(true)
        }
    }
    const changeNewStart = (newStartValue: string) => {
        setNewStart(newStartValue)

        isCorrectInputValue = Number(newMax) > Number(newStartValue) && Number(newStartValue) >= 0

        toggleError()

        if(Number(newStartValue) < 0) {
            setErrorInputStart(true)
        }

        if (Number(newMax) <= Number(newStartValue)) {
            setErrorInputStart(true)
            setErrorInputMax(true)
        }
    }

    const changeInputValues = () => {

        dispatch(changeMaxCountAC({newMaxCount: Number(newMax)}))
        dispatch(changeStartCountAC({newStartCount: Number(newStart)}))
    }

    const disabledSetButton = !counter.isSetting || error

    return (
        <WrapperStyled>
            <SettingsContent
                changeNewMax={changeNewMax}
                changeNewStart={changeNewStart}
                newMax={newMax}
                newStart={newStart}
                errorInputMax={errorInputMax}
                errorInputStart={errorInputStart}
            />
            <ButtonsWrapperStyled>
                <Button title={'set'} onClick={changeInputValues} disabled={disabledSetButton}/>
            </ButtonsWrapperStyled>
        </WrapperStyled>
    );
};