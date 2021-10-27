import styled from "styled-components";
import { keyframes } from "styled-components";

const cursor = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
`

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
    border-top: 2.5px solid;
    border-left: 2.5px solid;
    border-bottom: .5px solid;
    border-right: 2.5px solid;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`

export const Lcd = styled.div`
    padding: .25em;
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
    /* padding: .25em; */
    width: 100%;
    display: flex;
    flex: 1;
    flex-flow: column wrap;
`

export const Input = styled.div`
    width: 100%;
    height: min-content;
    padding: .25em;
    display: flex;
    flex: 0;
    flex-flow: column;
`

export const System = styled.span`
    width: 100%;
    margin: ${props => props.title ? '.25em 0' : '0'};
    border-bottom: ${props => props.title ? '.25em solid' : '.5px solid'};
    padding: ${props => props.title ? '.25em' : '0'};
    display: flex;
    justify-content: ${props => props.align ? props.align : 'flex-start'};
    flex: 1;
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
    padding: .25em;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: row wrap;
`

export const InputRow = styled.div`
    min-height: 50px;
    max-height: 75px;
    overflow: scroll;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    border-top: .5px solid;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
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

export const Cursor = styled.div`
    animation: ${cursor} 1s infinite;
    padding-left: ${props => props.padding === false ? '0' : '.5em'};
`