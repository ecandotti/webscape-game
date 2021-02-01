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
<<<<<<< HEAD
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
                        <button onClick={() => setViewId(1)}> Commencer </button>
                    </div>
                </div>
            
=======
            <div className="App">
                <p>Titre</p>

                <button onClick={() => setViewId(1)}> continuer </button>
            </div>
>>>>>>> 56f9f8b52f7f6c29793d1b3b3031a579dd0149ce
        )
    }
}