import './App.css'
import {Counter} from './assets/components/counter/Counter.tsx';
import {useState} from 'react';
import {Settings} from './assets/components/settings/Settings.tsx';
import {ContainerStyled} from './assets/components/styled-components/ContainerStyled.ts';

function App() {

    const maxValueAsString = localStorage.getItem('maxCount')
    let max
    if (maxValueAsString) {
        max = JSON.parse(maxValueAsString)
    }

    const startValueAsString = localStorage.getItem('startCount')
    let start
    if (startValueAsString) {
        start = JSON.parse(startValueAsString)
    }

    const [maxCount, setMaxCount] = useState(max || 5)
    const [startCount, setStartCount] = useState(start || 0)
    const [isSetting, setIsSetting] = useState(false)
    const [count, setCount] = useState<number>(startCount)
    const [error, setError] = useState(false)

    // useEffect(() => {
    //     const maxValueAsString = localStorage.getItem('maxCount')
    //     if (maxValueAsString) {
    //         setMaxCount(JSON.parse(maxValueAsString))
    //     }
    //
    //     const startValueAsString = localStorage.getItem('startCount')
    //     if (startValueAsString) {
    //         setStartCount(JSON.parse(startValueAsString))
    //     }
    // }, [])


    const changeMaxCount = (newMaxCount: number) => {
        setMaxCount(newMaxCount)
        setIsSetting(false)
        localStorage.setItem('maxCount', JSON.stringify(newMaxCount));
    }
    const changeStartCount = (newStartCount: number) => {
        setStartCount(newStartCount)
        setCount(newStartCount)
        setIsSetting(false)
        localStorage.setItem('startCount', JSON.stringify(newStartCount));
    }

    const incrementCount = () => {
        setCount((count) => count + 1)
    }
    const resetCount = () => {
        setCount(startCount)
    }

    return (
        <ContainerStyled>
            <Settings maxCount={maxCount}
                      startCount={startCount}
                      setIsSetting={setIsSetting}
                      changeMaxCount={changeMaxCount}
                      changeStartCount={changeStartCount}
                      isSetting={isSetting}
                      setError={setError}
                      error={error}
            />
            <Counter maxCount={maxCount}
                     startCount={startCount}
                     isSetting={isSetting}
                     count={count}
                     incrementCount={incrementCount}
                     resetCount={resetCount}
                     error={error}/>
        </ContainerStyled>
    )
}

export default App
