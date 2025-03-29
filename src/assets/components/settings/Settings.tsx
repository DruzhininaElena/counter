import {Button} from '../button/Button.tsx';
import {ButtonsWrapperStyled} from '../styled-components/ButtonsWrapperStyled.ts';
import {WrapperStyled} from '../styled-components/WrapperStyled.ts';
import {SettingsContent} from './SettingsContent.tsx';
import {useState} from 'react';

type Props = {
    maxCount: number
    startCount: number
    setIsSetting: (isSetting: boolean) => void
    changeMaxCount: (newMaxCount: number) => void
    changeStartCount: (newStartCount: number) => void
    isSetting: boolean
    setError: (error: boolean) => void
    error: boolean
};
export const Settings = ({ maxCount, startCount, setIsSetting, changeMaxCount, changeStartCount, isSetting, setError, error }: Props) => {

    const [newMax, setNewMax] = useState(maxCount)
    const [newStart, setNewStart] = useState(startCount)
    const [errorInputMax, setErrorInputMax] = useState(false)
    const [errorInputStart, setErrorInputStart] = useState(false)

    // useEffect(() => {
    //     const maxValueAsString = localStorage.getItem('maxCount')
    //     if (maxValueAsString) {
    //         setNewMax(JSON.parse(maxValueAsString))
    //     }
    //
    //     const startValueAsString = localStorage.getItem('startCount')
    //     if (startValueAsString) {
    //         setNewStart(JSON.parse(startValueAsString))
    //     }
    // }, [])


    let isCorrectInputValue: boolean

    const toggleError = () => {
        if (!isCorrectInputValue) {
            setError(true)
            setIsSetting(false)
        } else {
            setError(false)
            setIsSetting(true)
            setErrorInputStart(false)
            setErrorInputMax(false)
        }
    }

    const changeNewMax = (newMaxValue: number) => {
        setNewMax(newMaxValue)

        isCorrectInputValue = newMaxValue > newStart && newStart >= 0

        toggleError()

        if (newMaxValue <= newStart) {
            setErrorInputStart(true)
            setErrorInputMax(true)
        }
    }
    const changeNewStart = (newStartValue: number) => {
        setNewStart(newStartValue)

        isCorrectInputValue = newMax > newStartValue && newStartValue >= 0

        toggleError()

        if(newStartValue < 0) {
            setErrorInputStart(true)
        }

        if (newMax <= newStartValue) {
            setErrorInputStart(true)
            setErrorInputMax(true)
        }
    }

    const changeInputValues = () => {

        changeMaxCount(newMax)
        changeStartCount(newStart)
    }

    const disabledSetButton = !isSetting || error

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