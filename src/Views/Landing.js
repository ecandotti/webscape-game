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
                <p>Titre</p>

                <button onClick={() => setViewId(1)}> continuer </button>
            </div>
        )
    }
}