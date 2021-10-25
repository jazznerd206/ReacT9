import React, { useState, useEffect } from 'react';
import { Keypad as Container, Row, Key, KeyRow } from '../../styled/keypad.styled';

function Keypad() {
    return (
        <Container>
            <Row className="top" >
                <Key>1</Key>
                <Key>
                    <KeyRow>2</KeyRow>
                    <KeyRow>abc</KeyRow>
                </Key>
                <Key>
                    <KeyRow>3</KeyRow>
                    <KeyRow>def</KeyRow>
                </Key>
            </Row>
            <Row  className="middle-one" >
                <Key>
                    <KeyRow>4</KeyRow>
                    <KeyRow>ghi</KeyRow>
                </Key>
                <Key>
                    <KeyRow>5</KeyRow>
                    <KeyRow>jkl</KeyRow>
                </Key>
                <Key>
                    <KeyRow>6</KeyRow>
                    <KeyRow>mno</KeyRow>
                </Key>
            </Row>
            <Row  className="middle-two" >
                <Key>
                    <KeyRow>7</KeyRow>
                    <KeyRow>pqrs</KeyRow>
                </Key>
                <Key>
                    <KeyRow>8</KeyRow>
                    <KeyRow>tuv</KeyRow>
                </Key>
                <Key>
                    <KeyRow>9</KeyRow>
                    <KeyRow>wxyz</KeyRow>
                </Key>
            </Row>
            <Row  className="bottom" >
                <Key>*</Key>
                <Key>
                    <KeyRow>0</KeyRow>
                    <KeyRow>_</KeyRow>
                </Key>
                <Key>#</Key>
            </Row>
        </Container>
    )
}

export default Keypad
