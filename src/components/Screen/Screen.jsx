import React, { useState, useEffect } from 'react';
import { Lcd, Screen as Container, Input, Target, System, MessageRow, InputRow, Message, Word, Cursor } from '../../styled/screen.styled';

function Screen({ query, words, setQuery }) {

    const [ msg, setMsg ] = useState('');

    const addWord = word => {
        setMsg(msg + word + " ");
        setQuery('');
    }

    return (
        <Container>
            <Lcd>
                <Target>
                    <MessageRow>
                        <System>
                            To: DevClub
                        </System>
                    </MessageRow>
                    <MessageRow>
                        <System align="center">
                            Message 1/1
                        </System>
                    </MessageRow>
                    <MessageRow>
                        <Message>
                            {msg}
                            <Cursor padding={msg.length > 0 ? true : false}>
                                {'_'}
                            </Cursor>
                        </Message>
                    </MessageRow>
                </Target>
                <Input>
                    <MessageRow>
                        {query === '' ? 'type away...' : query}
                    </MessageRow>
                    <InputRow>
                        {Array.isArray(words) && words.map((word, index) => {
                            return (
                                <Word key={`${word} + ${index}`} onClick={() => addWord(word)}>
                                    {word}
                                </Word>
                            )
                        })}
                    </InputRow>
                </Input>
            </Lcd>
        </Container>
    )
}

export default Screen
