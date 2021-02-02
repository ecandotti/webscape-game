import React from "react"
import '../styles/App.css';
import '../styles/Landing.css';

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
                        <h2>ESCAPE GAME : LES GALERES DE JEAN-MICHEL</h2>
                    </div>
                    <div className="intro">
                        <p>Bravo vous avez fini l'escape game!<br/>
                            Suite a ça Jean-Michel a perdu son stage a Ynov car il a acceder au compte administrateur.<br/>
                            Mais heureusement pour lui il a pu trouver un emploi<br/><br/>

                            Le principe est simple, vous devrez résoudre plusieurs mini-jeux / énigmes afin de pouvoir avancer dans l’histoire et aider Jean-Michel à pouvoir travailler sans embûches.<br/><br/>
                            Appuyez sur le bouton ‘Commencer’ pour débuter la partie.</p>
                    </div>
                </div>
            </div>
        )
    }
}