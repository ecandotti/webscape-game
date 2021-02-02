import React from 'react'

import '../styles/App.css'
import '../styles/step5/step-five.css'

export default class StepFive extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isOpenEditScript: false
        }
    }

    touchEditScript = () => {
        this.setState({isOpenEditScript: !this.state.isOpenEditScript})
    }

    render() {
        const { setViewId } = this.props
        return (
            <div className='container-step5'>
                <div className='window' id='test'>
                    <div className='header-window'>
                        <span>Kernel</span>
                    </div>
                    <div className='top-panel'>
                        <div className='path'>
                            <span>C:/secret-users/JSUnHackeur/malicious/program/</span>
                        </div>
                    </div>
                    <div className='main-content'>
                        <div className='content'>
                            <div className='edit-script-button' onClick={() => setViewId(6)}>
                                Edit Script
                            </div>
                            <img className='matrix-gif' src='https://thumbs.gfycat.com/AliveAdmirableEidolonhelvum-max-1mb.gif'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}