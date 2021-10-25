import React, { useState, useEffect } from 'react';
import Keypad from './components/Keypad/Keypad';
import Screen from './components/Screen/Screen';
import { App as Container } from './styled/app.styled';

function App() {

    const [ msg, setMsg ] = useState('');

    useEffect(() => {
        setMsg('T9 biiiiiihhhh');
    }, [])

    return (
        <Container>
            <Screen />
            <Keypad />
        </Container>
    )
}

export default App