import React from "react"
import '../styles/App.css';
import '../styles/StepSeven.css';
import dog from '../assets/img/dog.jpg';
import bowling from '../assets/img/bowling-game.jpg';

export default class StepSeven extends React.Component{
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
                <div className="firstFlex">
                    <div >
                        <img className="dog" src={dog} alt="Rex"></img>
                    </div>
                    <p className="coordinates">50.68685466387339</p>
               </div>
               <div className="secondFlex">
                   <p className="coordinates">3.180785903699407</p>
                   <div >
                        <img className="bowling" src={bowling}></img>
                    </div>
               </div>
            </div>
        )
    }
}