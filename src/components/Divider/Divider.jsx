import React from 'react';
import { Divider as Container, SideHinge, MiddleHinge } from '../../styled/divider.styled.jsx';

function Divider() {
    return (
        <Container>
            <SideHinge />
            <MiddleHinge />
            <SideHinge />
        </Container>
    )
}

export default Divider
