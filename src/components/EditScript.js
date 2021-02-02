import React from 'react'

import '../styles/step3/terminal.css'

const EditScript = ({touchEditScript, setViewId}) => {
    return (
        <div className='terminal-window'>
            <div className='header-window'>
                <span>terminal.exe</span>
                <div className='right-side'>
                    <span>_</span>
                    <span>&#9633;</span>
                    <span style={{color: 'red', cursor: 'pointer'}} onClick={() => touchEditScript()}>X</span>
                </div>
            </div>
            <div className='terminal-content'>
                <span>Last login: Mon Feb  1 10:42:20 on ttys001<br/></span>
                <span>jmichel@open-space1 ~ % 
                    <input  
                        value={prompt} 
                        onChange={e => setPrompt(e.target.value)} 
                        onKeyPress={e => verifyCommand(e)}
                        className='prompt'
                        disabled={commandLine}
                        />
                </span>
                {
                    commandLine && <span style={{color: 'red', fontWeight: '600'}}>{message}</span>
                }
            </div>
        </div>
    )
}
 
export default EditScript