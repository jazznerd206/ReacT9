import styled from "styled-components";

export const Screen = styled.div`
    height: 100%;
    width: 192px;
    margin: 0 auto;
    padding: 1em;
    background: rgba(0,0,0,.5);
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    border: .5px solid;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    `

export const Lcd = styled.div`
    width: 100%;
    background: rgba(255,255,255,.75);
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    border: .5px solid;
`

export const Target = styled.div`
    margin: 0 auto;
    padding: .25em;
    width: 100%;
    display: flex;
    flex: 1;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: flex-start;
`

export const Input = styled.div`

`

export const System = styled.span`
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
`

export const MessageRow = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
`

export const Message = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
`

export const InputRow = styled.div`
    min-height: 50px;
    max-height: 100px;
    overflow: scroll;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
`

export const Word = styled.p`
    height: fit-content;
    margin: .1em;
    padding: .25em;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-size: .5em;
    border: .5px solid;
    border-radius: 5px;
    box-shadow: inset 0 0 2px rgba(0,0,0,.25);
    &:active {
        background: rgba(0,0,0,.75);
        color: rgba(218,165,32);
    }
    transition: all .1s ease-in-out;
`