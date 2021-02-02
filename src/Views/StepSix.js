import React from 'react'

import '../styles/App.css'
import '../styles/step6/step-six.css'

export default class StepFive extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    };

    checkCode = () => {
        const { setViewId } = this.props;
        const { value } = this.state;
        if (value === 'i++' || value === 'i += 1' || value === 'i = i + 1'){
            setViewId(8)
        } else {
            this.setState({value: ''})
        }
    };

    render() {
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
                            while(i {"< 10"}) (<br/>
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