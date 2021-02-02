import React from 'react'
import Modal from 'react-modal'

import TaskManager from '../components/TaskManager'

import '../styles/App.css'
import '../styles/step4/step-four.css'


Modal.setAppElement('#root')

export default class StepFour extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenTaskManager: false
        }
    }

    touchTaskManager = () => {
        this.setState({isOpenTaskManager: !this.state.isOpenTaskManager})
    }

    render() {
        const { setViewId } = this.props
        return (
            <div className='App container'>
                <div className='window' id='test'>
                    <div className='header-window'>
                        <span>Explorer</span>
                        <div className='right-side'>
                            <span>_</span>
                            <span>&#9633;</span>
                            <span style={{color: 'red'}}>X</span>
                        </div>
                    </div>
                    <div className='top-panel'>
                        <div className='path'>
                            <span>C:/secret-users/JSUnHackeur/documents/</span>
                        </div>
                    </div>
                    <div className='main-content'>
                        <div className='left-panel'>
                            <span>Disk (C:)</span>
                            <span className='hoverable'>Desktop</span>
                            <span className='hoverable'>Download</span>
                            <span>Profil</span>
                            <span className='hoverable' id='current-user'>JSUnHackeur</span>
                            <span>Users</span>
                            <span className='hoverable'>Alex</span>
                            <span className='hoverable'>Jean-Michel</span>
                            <span className='hoverable'>Kankuro</span>
                            <span>Program :</span>
                            <span className='hoverable' id='executable' onDoubleClick={() => this.touchTaskManager()}>TaskManager.exe</span>
                        </div>
                        <div className='content'>
                        </div>
                    </div>
                    <Modal isOpen={this.state.isOpenTaskManager} style={{content: {padding: '0px'}}}>
                        <TaskManager touchTaskManager={this.touchTaskManager} setViewId={setViewId}/>
                    </Modal>
                </div>
                <div className='task-bar'>
                    <div className='task-item active-task'>
                        <img src='https://www.freepnglogos.com/uploads/discord-logo-png/seven-kingdoms-9.png'/>
                    </div>
                    <div className='task-item active-task'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1024px-Google_Chrome_icon_%28September_2014%29.svg.png'/>
                    </div>
                    <div className='task-item'>
                        <img src='https://heliocentrix.co.uk/wp-content/uploads/2020/04/microsoft-teams-logo-png_480-480.png'/>
                    </div>
                    <div className='task-item active-task'>
                        <img src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/terminal-512.png'/>
                    </div>
                    <div className='task-item'>
                        <img src='https://www.opendoorsca.org/wp-content/uploads/2020/04/spotify-logo-png-open-2000.png'/>
                    </div>
                    <div className='task-item'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png'/>
                    </div>
                </div>
            </div>
        )
    }
}
