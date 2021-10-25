import React, { useState, useEffect } from 'react';

function App() {

    const [ msg, setMsg ] = useState('');

    useEffect(() => {
        setMsg('T9 biiiiiihhhh');
    }, [])

    return (
        <div>
            {msg}
        </div>
    )
}

export default App