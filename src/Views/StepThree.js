import React from 'react'
import Modal from 'react-modal'

import ErrorMsg from '../components/ErrorMsg'
import ErrorLog from '../components/ErrorLog'
import Terminal from '../components/Terminal'
import Script from '../components/Script'

import '../styles/App.css'
import '../styles/step3/step-three.css'


Modal.setAppElement('#root')

export default class StepThree extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            state: 'state',
            isOpenLog: false,
            isOpenTerminal: false,
            isOpenScript: false,
            isOpenErrorMsg: false,
            errorGenerated: false,
            writeValidCommand: false
        }
        this.touchErrorLog = this.touchErrorLog.bind(this)
        this.touchTerminal = this.touchTerminal.bind(this)
        this.touchErrorMsg = this.touchErrorMsg.bind(this)
        this.setWriteValidCommand = this.setWriteValidCommand.bind(this)
        this.touchScript = this.touchScript.bind(this)
    }

    touchScript() {
        this.setState({isOpenScript: false})
    }

    touchErrorLog() {
        this.setState({isOpenLog: !this.state.isOpenLog})
    }
    

    touchErrorMsg() {
        this.setState({isOpenErrorMsg: !this.state.isOpenErrorMsg})
    }

    touchTerminal() {
        this.setState({isOpenTerminal: !this.state.isOpenTerminal})
    }

    setWriteValidCommand() {
        this.setState({writeValidCommand: true})
        console.log('validate !')
    }

    openScript() {
        if (!this.state.errorGenerated) {
            this.setState({errorGenerated: true})
            this.touchErrorMsg()
            console.log('fichier log généré')
        } else if (this.state.errorGenerated && this.state.writeValidCommand) {
            this.setState({ isOpenScript: true })
            console.log('done')
        } else {
            console.log('error')
        }
    }

    render() {
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
                            <span>C:/os/program/script/bin</span>
                        </div>
                    </div>
                    <div className='main-content'>
                        <div className='left-panel'>
                            <span>Disk (C:)</span>
                            <span className='hoverable'>Desktop</span>
                            <span className='hoverable'>Download</span>
                            <span>Profil</span>
                            <span className='hoverable'>Jean-Michel (Me)</span>
                            <span>Users</span>
                            <span className='hoverable'>Alex</span>
                            <span className='hoverable'>Sanji</span>
                            <span className='hoverable'>Kankuro</span>
                            <span>Program :</span>
                            <span className='hoverable' id='executable' onDoubleClick={() => this.touchTerminal()}>Terminal.exe</span>
                        </div>
                        <div className='content'>
                            <div className='file' onDoubleClick={() => this.openScript()}>
                                <img src='https://icons.iconarchive.com/icons/untergunter/leaf-mimes/512/text-x-script-icon.png' alt=''/>
                                <span>Who Eats myRAM.py</span>
                            </div>

                            {
                                this.state.errorGenerated &&
                                <div className='file' onDoubleClick={() => this.touchErrorLog()}>
                                    <img src='https://www.safety-kit.fr/wp-content/uploads/2020/10/safety-kit-icone-txt.png' alt=''/>
                                    <span>error.log</span>
                                </div>
                            }
                        </div>
                    </div>
                    <Modal isOpen={this.state.isOpenLog} style={{content: {padding: '0px'}}}>
                        <ErrorLog touchErrorLog={this.touchErrorLog}/>
                    </Modal>
                    <Modal isOpen={this.state.isOpenErrorMsg} style={{content: {padding: '0px', background: '#2d3436', color: 'red'}}}>
                        <ErrorMsg touchErrorMsg={this.touchErrorMsg} />
                    </Modal>
                    <Modal isOpen={this.state.isOpenScript} style={{content: {padding: '0px', background: '#2d3436'}}}>
                        <Script touchScript={this.touchScript} />
                    </Modal>
                    <Modal isOpen={this.state.isOpenTerminal} style={{content: {padding: '0px', background: '#2d3436'}}}>
                        <Terminal touchTerminal={this.touchTerminal} setWriteValidCommand={this.setWriteValidCommand}/>
                    </Modal>
                </div>
            </div>
        )
    }
}
