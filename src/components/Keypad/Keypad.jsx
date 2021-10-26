import React, { useState, useEffect } from 'react';
import { Keypad as Container, Row, Key, KeyRow } from '../../styled/keypad.styled';

function Keypad({ query, setQuery, response, setResponse }) {

    return (
        <Container>
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
                <Key onClick={() => setResponse(response.substring(0, response.length - 2))}>
                    <KeyRow>#</KeyRow>
                    <KeyRow >{"<"}</KeyRow>
                </Key>
            </Row>
        </Container>
    )
}

export default Keypad
