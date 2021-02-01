import React from "react"
import '../styles/App.css';

export default class StepThree extends React.Component{
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
                <p>Step Three</p>
                <button onClick={() => setViewId(0)}> landing </button>
                <button onClick={() => setViewId(1)}> step 1 </button>
                <button onClick={() => setViewId(2)}> step 2 </button>
                <button onClick={() => setViewId(3)}> step 3 </button>
                <button onClick={() => setViewId(4)}> step 4 </button>
                <button onClick={() => setViewId(5)}> step 5 </button>
                <button onClick={() => setViewId(6)}> step 6 </button>
                <button onClick={() => setViewId(7)}> step 7 </button>            </div>
        )
    }
}