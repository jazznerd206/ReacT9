import React, { useState, useEffect } from 'react';
import Keypad from './components/Keypad/Keypad';
import Screen from './components/Screen/Screen';
import { App as Container } from './styled/app.styled';
import { buildTrie } from './hooks/buildTrie.jsx'
import Divider from './components/Divider/Divider';

function App() {

    const [ msg, setMsg ] = useState('');
    const [ query, setQuery ] = useState('');
    const [ response, setResponse ] = useState();
    const [ deep, setDeep ] = useState(false)
    const _TRIE = buildTrie();

    const clearData = () => {
        console.log('clear');
        setQuery('');
        setResponse('');
    }

    useEffect(() => {
        if (deep === false) {
            setResponse(_TRIE.lookup(query));
        } else if (deep === true) {
            setResponse(_TRIE.deepLookup(query));
        }
    }, [query])

    return (
        <Container>
            <Screen query={query} setQuery={setQuery} words={response} setResponse={setResponse} message={msg} setMessage={setMsg} />
            <Divider />
            <Keypad query={query} setQuery={setQuery} deep={deep} setDeep={setDeep} clear={clearData} message={msg} setMessage={setMsg} />
        </Container>
    )
}

export default App