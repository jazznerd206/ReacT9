import styled from "styled-components";

export const Keypad = styled.div`
    height: min-content;
    width: fit-content;
    margin: 0 auto;
    padding: 1em;
    background: rgba(0,0,0,.5);
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    flex: 0;
    border: .5px solid;
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

    }
    &.middle-two {

    }
    &.bottom {
        
    }
`

export const Key = styled.div`
    margin: 0;
    padding: 1em;
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
    border-radius: 15px;
    &:active {
        background: rgba(0,0,0,.25);
        color: rgba(218,165,32);
    }
    transition: all .1s ease-in-out;
`

export const KeyRow = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`