import styled from "styled-components";

export const Divider = styled.div`
    min-height: 10px;
    width: 225px;
    margin: 0 auto;
    padding: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    flex: 0;
`

export const SideHinge = styled.div`
    height: 50px;
    width: 10px;
    border: .5px solid;
    background: silver;
    z-index: 999;
    border-radius: 2px;
`

export const MiddleHinge = styled.div`
    width: 50px;
    height: 15px;
    border: .5px solid;
    background: silver;
    z-index: 999;
    border-radius: 5px;
`