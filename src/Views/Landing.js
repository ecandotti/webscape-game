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
<<<<<<< HEAD
                <div className="App">
                    <div className="overlap">
                        <div className="title">
                            <p>Escape Game</p>
                        </div>
                        <div className="intro">
                            <p></p>
                        </div>  
=======
            <div className="App">
                <div className="overlap">
                    <div className="title">
                        <p>ESCAPE GAME : LES GALERES DE JEAN-MICHEL</p>
                    </div>
                    <div className="intro">
                        <p>Bonjour et bienvenue sur notre projet de groupe réalisé dans le cadre du Challenge 48h.</p>
                        <p>Le principe de celui-ci est de résoudre plusieurs énigmes qui permettront à notre personnage principal :
                            Jean-Michel, de résoudre les différents problèmes auxquels il fait face sur son lieu de travail.
                        </p>
                        <p>Le principe est simple, vous devrez résoudre plusieurs mini-jeux / énigmes afin de pouvoir avancer dans l’histoire et aider Jean-Michel à pouvoir travailler sans embûches.</p>
                        <p>Appuyez sur le bouton ‘Commencer’ pour débuter la partie.</p>
>>>>>>> d9526123a5e04d07e696e168b9630ca0fbd275e5
                    </div>
                    <div>
                        <button onClick={() => setViewId(2)}> Commencer </button>
                    </div>
                </div>
<<<<<<< HEAD
            
=======
            </div>
>>>>>>> d9526123a5e04d07e696e168b9630ca0fbd275e5
        )
    }
}