import React from "react"
import '../styles/App.css';

export default class Landing extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            state: "state"
        }
    }


    render() {
        const { setViewId } = this.props;
        return (
                <div className="App">
                    <div className="overlap">
                        <div className="title">
                            <p>Escape Game</p>
                        </div>
                        <div className="intro">
                            <p></p>
                        </div>  
                    </div>
                    
                    <div>
                        <button onClick={() => setViewId(2)}> Commencer </button>
                    </div>
                </div>
            
        )
    }
}