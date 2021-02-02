import React from 'react'

import '../styles/App.css'
import '../styles/step6/step-six.css'

export default class StepFive extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    touchEditScript = () => {
        this.setState({isOpenEditScript: !this.state.isOpenEditScript})
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    checkCode = () => {
        if (this.state.value === 'i++'){
            this.props.setViewId(7)
        } else {
            this.setState({value: ''})
        }
    }

    render() {
        const { setViewId } = this.props
        return (
            <div className='container-step6'>
                <div className='terminal-window border-white'>
                    <div className='header-window'>
                        <span>nano</span>
                        <span>C:/secret-users/JSUnHackeur/malicious/program/script.py</span>
                        <div className='right-side'>
                            <span>_</span>
                            <span>&#9633;</span>
                            <span style={{color: 'red', cursor: 'pointer'}}>X</span>
                        </div>
                    </div>
                    <div className='terminal-content user-select-none'>
                        <p>
                            i = 0<br/>
                            while(i) (<br/>
                            f := programme lourd<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;echo f<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;echo 'Bravo vous avez fini'<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<input className='missing-line' value={this.state.value} onChange={e => this.handleChange(e)}/><br/>
                            )
                        </p>
                        <div className='save-button' onClick={() => this.checkCode()}>
                            Save
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}