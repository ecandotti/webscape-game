import React from 'react'

import '../styles/step3/terminal.css'
import '../styles/step4/taskmanager.css'

const TaskManager = ({touchTaskManager, setViewId}) => {
    return (
        <div className='terminal-window'>
            <div className='header-window'>
                <span>TaskManager.exe</span>
                <div className='right-side'>
                    <span>_</span>
                    <span>&#9633;</span>
                    <span style={{color: 'red', cursor: 'pointer'}} onClick={() => touchTaskManager()}>X</span>
                </div>
            </div>
            <div className='taskmanager-content'>
                <div className='task-running-item'>
                    <img src='https://www.freepnglogos.com/uploads/discord-logo-png/seven-kingdoms-9.png'/> Discord
                </div>
                <div className='task-running-item'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1024px-Google_Chrome_icon_%28September_2014%29.svg.png'/> Google Chrome
                </div>
                <div className='task-running-item'>
                    <img src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/terminal-512.png'/> Terminal
                </div>
                <div className='task-running-item' onDoubleClick={() => setViewId(5)}>
                    <img src='https://orditronics.com/wp-content/uploads/2019/04/skype-3-png-transparent-logo.png'/> Skaype
                </div>
            </div>
        </div>
    )
}
 
export default TaskManager