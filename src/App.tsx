import './App.css'
import {Counter} from './assets/components/counter/Counter.tsx';
import {useState} from 'react';
import {Settings} from './assets/components/settings/Settings.tsx';
import {ContainerStyled} from './assets/components/styled-components/ContainerStyled.ts';

function App() {

    const max = Number(localStorage.getItem("maxCount"))
    const start = Number(localStorage.getItem("startCount"))

    const [maxCount, setMaxCount] = useState(max || 5)
    const [startCount, setStartCount] = useState(start || 0)
    const [isSetting, setIsSetting] =useState(false)
    const [count, setCount] = useState(startCount)
    const [error, setError] = useState(false)

    localStorage.setItem("maxCount", maxCount.toString());
    localStorage.setItem("startCount", startCount.toString());

    const changeMaxCount = (newMaxCount: number) => {
        setMaxCount(newMaxCount)
        setIsSetting(false)
    }
    const changeStartCount = (newStartCount: number) => {
        setStartCount(newStartCount)
        setCount(newStartCount)
        setIsSetting(false)
    }

    const incrementCount = () => {
        setCount((count) => count + 1)
    }
    const resetCount = () => {
        setCount(startCount)
    }

    return (
        <ContainerStyled >
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
