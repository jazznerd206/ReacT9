import React, { useState, useEffect } from 'react';
import { Keypad as Container, Row, Key, ActionKey, KeyRow, SendIt, TrashIt, DeepLookup } from '../../styled/keypad.styled';

function Keypad({ query, setQuery, response, setResponse, deep, setDeep, clear }) {



    return (
        <Container>
            <Row className="penthouse">
                <ActionKey bgcolor="red" onClick={() => clear()}>
                    <TrashIt />
                </ActionKey>
                <ActionKey bgcolor="green" onClick={() => clear()}>
                    <SendIt />
                </ActionKey>
                <ActionKey bgcolor="white">
                    <DeepLookup active={deep} onClick={() => setDeep(!deep)} />
                </ActionKey>
            </Row>
            <Row className="top" >
                <Key>1</Key>
                <Key onClick={() => setQuery(query + '2')}>
                    <KeyRow>2</KeyRow>
                    <KeyRow>abc</KeyRow>
                </Key>
                <Key onClick={() => setQuery(query + '3')}>
                    <KeyRow>3</KeyRow>
                    <KeyRow>def</KeyRow>
                </Key>
            </Row>
            <Row  className="middle-one" >
                <Key onClick={() => setQuery(query + '4')}>
                    <KeyRow>4</KeyRow>
                    <KeyRow>ghi</KeyRow>
                </Key>
                <Key onClick={() => setQuery(query + '5')}>
                    <KeyRow>5</KeyRow>
                    <KeyRow>jkl</KeyRow>
                </Key>
                <Key onClick={() => setQuery(query + '6')}>
                    <KeyRow>6</KeyRow>
                    <KeyRow>mno</KeyRow>
                </Key>
            </Row>
            <Row  className="middle-two" >
                <Key onClick={() => setQuery(query + '7')}>
                    <KeyRow>7</KeyRow>
                    <KeyRow>pqrs</KeyRow>
                </Key>
                <Key onClick={() => setQuery(query + '8')}>
                    <KeyRow>8</KeyRow>
                    <KeyRow>tuv</KeyRow>
                </Key>
                <Key onClick={() => setQuery(query + '9')}>
                    <KeyRow>9</KeyRow>
                    <KeyRow>wxyz</KeyRow>
                </Key>
            </Row>
            <Row  className="bottom" >
                <Key>*</Key>
                <Key onClick={() => setResponse(response + ' ')}>
                    <KeyRow>0</KeyRow>
                    <KeyRow>_</KeyRow>
                </Key>
                <Key onClick={() => deleteChar(response)}>
                    <KeyRow>#</KeyRow>
                    <KeyRow >{"<"}</KeyRow>
                </Key>
            </Row>
        </Container>
    )
}

export default Keypad
