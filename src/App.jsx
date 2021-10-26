import React, { useState, useEffect } from 'react';
import Keypad from './components/Keypad/Keypad';
import Screen from './components/Screen/Screen';
import { App as Container } from './styled/app.styled';
import { buildTrie } from './hooks/buildTrie.jsx'

function App() {

    const [ msg, setMsg ] = useState('');
    const [ query, setQuery ] = useState('');
    const [ response, setResponse ] = useState('');
    const _TRIE = buildTrie();

    useEffect(() => {
        setResponse(_TRIE.lookup(query));
    }, [query])

    return (
        <Container>
            <Screen query={query} words={response} setQuery={setQuery} />
            <Keypad query={query} setQuery={setQuery}/>
        </Container>
    )
}

export default App