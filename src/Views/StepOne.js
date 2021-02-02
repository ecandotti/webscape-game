import React from "react"
import '../styles/App.css';
import '../styles/StepOne.css';

export default class StepOne extends React.Component{
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
                <div className="StepOneContainer">
                    <div className="LeftSide">
                        <div className="TextContainer">
                            <p className="Text">
                                Lorem&nbsp;
                            </p>
                            <p className="Text" onClick={() => console.log("helo")} >
                                i
                            </p>
                            <p className="Text">
                                psum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda beatae debitis eaque, hic in ipsa labore magni maiores modi nam nobis nulla, optio, quo ratione sapiente temporibus vitae voluptate?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolores ea est eum laborum nemo praesentium suscipit! Cum doloribus libero, nihil nulla odit quibusdam voluptates. Odio quas ratione repellendus?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nemo reprehenderit tempora. Ad aperiam cumque doloremque magni maiores quam quas? Accusamus, ad animi at dolorem ea libero quia sed velit?
                            </p>
                        </div>
                        <div className="GoalWordContainer">
                            <p>J</p>
                            <p>E</p>
                            <p>&nbsp;</p>
                            <p>S</p>
                            <p>U</p>
                            <p>I</p>
                            <p>S</p>
                            <p>&nbsp;</p>
                            <p>L</p>
                            <p>E</p>
                            <p>&nbsp;</p>
                            <p>M</p>
                            <p>O</p>
                            <p>T</p>
                        </div>
                    </div>
                    <div className="RightSide">
                        <p className="DescriptionText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores aut, cum dicta et harum ipsum libero nemo, nulla perferendis praesentium quisquam ratione repellendus sint tempora tenetur totam velit voluptas!</p>
                    </div>
                </div>
            </div>
        )
    }
}