import React from 'react'

import '../styles/step3/terminal.css'

const Script = ({touchScript}) => {
    return (
        <div className='terminal-window'>
            <div className='header-window'>
                <span>WhoEatsMyRAM.py</span>
                <div className='right-side'>
                    <span>_</span>
                    <span>&#9633;</span>
                    <span style={{color: 'red', cursor: 'pointer'}} onClick={() => touchScript()}>X</span>
                </div>
            </div>
            <div className='terminal-content'>
                <span>Loading...<br/></span>
                <span>Ok, the malware has been launched by JSUnHacker. <br/></span>
                <span>Oh, it's... it's... O_o.... <br/></span>
                <span style={{color: 'red'}}>An infinite loop !!!!!!! <br/></span>
            </div>
        </div>
    )
}
 
export default Script