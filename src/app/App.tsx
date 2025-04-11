import './App.css'
import {useState} from 'react';
import {ContainerStyled} from '../components/styled-components/ContainerStyled.ts';
import {Settings} from '../components/settings/Settings.tsx';
import {Counter} from '../components/counter/Counter.tsx';

export type Counter = {
    count: number
    maxCount: number
    startCount: number
    isSetting: boolean
}

function App() {

    const [error, setError] = useState<boolean>(false)

    return (
        <ContainerStyled>
            <Settings
                setError={setError}
                error={error}
            />
            <Counter
                error={error}/>
        </ContainerStyled>
    )
}

export default App
