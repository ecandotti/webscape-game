import React from "react"
import '../styles/App.css';
import dog from '../assets/img/dog.jpg'
import bowling from '../assets/img/bowling-game.jpg'

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
                <div className="fisrtFlex">
                    <div >
                        <img className="dog" src={dog}></img>
                    </div> 

                    <p>50.68685466387339</p>   
               </div>

               <div className="secondFlex">
                    <div >
                        <img className="bowling" src={bowling}></img>
                    </div> 

                    <p>3.180785903699407</p>   
               </div>
            </div>
        )
    }
}