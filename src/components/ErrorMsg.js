import React from 'react'

import '../styles/step3/terminal.css'

const ErrorMsg = ({touchErrorMsg}) => {
    return ( 
        <div className='error-window'>
            <div className='header-window'>
                <span>scrypt.py</span>
                <div className='right-side'>
                    <span>_</span>
                    <span>&#9633;</span>
                    <span style={{color: 'red', cursor: 'pointer'}} onClick={() => touchErrorMsg()}>X</span>
                </div>
            </div>
            <div className='error-content'>
                <p>
                    RunTime Error : EX5103 <br/>
                    A error.log has been created
                </p>
            </div>
        </div> 
    )

}
 
export default ErrorMsg