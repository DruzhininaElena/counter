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

    const [newMax, setNewMax] = useState<string>(maxCount.toString())
    const [newStart, setNewStart] = useState<string>(startCount.toString())
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

        changeMaxCount(Number(newMax))
        changeStartCount(Number(newStart))
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