import React, { useState, useEffect } from 'react';
import { Lcd, Screen as Container, Input, Target, System, MessageRow, InputRow, Message, Word } from '../../styled/screen.styled';

function Screen() {

    const [ msg, setMsg ] = useState('');
    const [ t9conversion, sett9conversion ] = useState('potential words list');

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
                        <System>
                            Message:
                        </System>
                        <Message>
                            {msg}
                        </Message>
                    </MessageRow>
                </Target>
                <Input>
                    <MessageRow>
                        t9 input: 123
                    </MessageRow>
                    <InputRow>
                        {t9conversion.split(' ').map(word => {
                            return (
                                <Word key={word} onClick={() => {setMsg(msg + " " + word)}}>
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
