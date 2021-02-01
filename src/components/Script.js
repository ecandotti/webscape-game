import React from 'react'

import '../styles/step3/terminal.css'

const Script = () => {
    return (
        <div className='terminal-window'>
            <div className='header-window'>
                <span>script.exe</span>
                <div className='right-side'>
                    <span>_</span>
                    <span>&#9633;</span>
                    <span style={{color: 'red', cursor: 'pointer'}} onClick={() => touchTerminal()}>X</span>
                </div>
            </div>
            <div className='terminal-content'>
                <span>Loading...<br/></span>
                <span>ok</span>
            </div>
        </div>
    )
}
 
export default Script