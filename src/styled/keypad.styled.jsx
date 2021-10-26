import styled from "styled-components";
import { Send, Trash2, Globe } from '@styled-icons/feather'

export const Keypad = styled.div`
    height: min-content;
    width: 193px;
    margin: 0 auto;
    padding: 1em;
    background: rgba(0,0,0,.5);
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    flex: 0;
    border-top: .5px solid;
    border-left: 2.5px solid;
    border-bottom: 2.5px solid;
    border-right: 2.5px solid;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    &.top {
    }
    &.middle-one {
        padding-left: .5em;
        border-left: .5px solid;
        padding-right: .5em;
        border-right: .5px solid;
    }
    &.middle-two {
        padding-left: .5em;
        border-left: .5px solid;
        padding-right: .5em;
        border-right: .5px solid;
    }
    &.bottom {
        padding-bottom: .5em;
        border-bottom: .5px solid;
    }
`

export const Key = styled.div`
    margin: 0;
    padding: .5em;
    height: auto;
    width: 30px;
    background: rgba(0,0,0,0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: .5px solid;
    border-left: .5px solid;
    border-bottom: .5px solid;
    border-radius: 10px;
    &:active {
        background: rgba(0,0,0,.25);
        color: rgba(218,165,32);
    }
    transition: all .1s ease-in-out;
`

export const ActionKey = styled.div`
    margin: 0;
    margin-bottom: 1px;
    padding: .1em;
    height: auto;
    width: 30px;
    background: rgba(0,0,0,0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: .5px solid;
    border-radius: 10px;
    &:active {
        background: ${props => props.bgcolor};
        color: ${props => props.type !== 'send' ? 'red' : 'green'};
    }
    transition: all .1s ease-in-out;
`

export const KeyRow = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const SendIt = styled(Send)`
    size: ${props => props.size || 16};
`

export const TrashIt = styled(Trash2)`
    size: ${props => props.size || 16};
`

export const DeepLookup = styled(Globe)`
    size: ${props => props.size || 16};
    color: ${props => props.active === false ? 'rgb(0,0,0)' : 'rgba(255,255,255)'}
`