import React, { useState } from 'react'

import '../styles/step3/terminal.css'

const Terminal = ({touchTerminal, setWriteValidCommand}) => {
    const [commandLine, isCorrectCommandLine] = useState(false)
    const [prompt, setPrompt] = useState('')

    const message = 
        <>
            Unexpected error during the executinon of the command<br/>
            Error at line 15 character 106<br/>
            Oups no character 5 of line 1<br/>
            Id:JSUnHacker mdp: ********<br/>
            But ****** Why, am i broken ?<br/>
            Something is wrong<br/>
            Maybe my RAM is broken :()<br/>
            Ah it's why you executed me<br/>
            Sorry but, I'm not available for the moment!<br/>
        </>

    const verifyCommand = ({key, target}) => {
        if(key === 'Enter'){
            console.log('enter pressed')
            if (target.value === 'ram -u -info') {
                setWriteValidCommand()
                isCorrectCommandLine(true)
                setPrompt('')
            }
            setPrompt('')
        }
    }
    return (
        <div className='terminal-window'>
            <div className='header-window'>
                <span>terminal.exe</span>
                <div className='right-side'>
                    <span>_</span>
                    <span>&#9633;</span>
                    <span style={{color: 'red', cursor: 'pointer'}} onClick={() => touchTerminal()}>X</span>
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
 
export default Terminal