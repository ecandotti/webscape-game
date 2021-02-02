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
                        <p>Bonjour et bienvenue sur notre projet de groupe réalisé dans le cadre du Challenge 48h.<br/>
                        Le principe de celui-ci est de résoudre plusieurs énigmes qui permettront à notre personnage principal : <br/>
                        Jean-Michel, de résoudre les différents problèmes auxquels il fait face sur son lieu de travail.<br/><br/>

                        Le principe est simple, vous devrez résoudre plusieurs mini-jeux / énigmes afin de pouvoir avancer dans l’histoire et aider Jean-Michel à pouvoir travailler sans embûches.<br/><br/>
                        Appuyez sur le bouton ‘Commencer’ pour débuter la partie.</p>
                    </div>
                    <button className="start" onClick={() => setViewId(3)}> Commencer </button>
                </div>
           </div>
        )
    }
}