import React from "react"
import '../styles/App.css';
import '../styles/StepOne.css';

export default class StepOne extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            goalChars: [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
            ]
        }
    }

    discoverGoalChar = (id) => {
        const { goalChars } = this.state;
        goalChars[id] = true;
        this.setState({ goalChars });
        console.log(goalChars);
    };



    render() {
        const { goalChars } = this.state;
        return (
            <div className="App">
                <div className="StepOneContainer">
                    <div className="LeftSide">
                        <div className="TextContainer">
                            <h1> La premiere galere de Jean miche miche</h1>
                            <p className="Text">
                                Pour cette première étape, Jean-Michel doit se connecter au compte
                                d’un administrateur afin d’avoir&nbsp;
                                <span className="specialText" onClick={() => this.discoverGoalChar(0)}>
                                    l
                                </span>
                                ’accès au g
                                <span className="specialText" onClick={() => this.discoverGoalChar(1)}>
                                        e
                                </span>
                                stionnaire des utilisateurs car sa pro
                                <span className="specialText" onClick={() => this.discoverGoalChar(2)}>
                                    b
                                </span>
                                lématique est que l’utilisati
                                <span className="specialText" onClick={() => this.discoverGoalChar(3)}>
                                    o
                                </span>
                                n de la RAM
                                est&nbsp;
                                <span className="specialText" onClick={() => this.discoverGoalChar(4)}>
                                    s
                                </span>
                                aturée et qu’il ne peut pa
                                <span className="specialText" onClick={() => this.discoverGoalChar(5)}>
                                    s
                                </span>
                                &nbsp;accéder à sa session personnelle. Son premier objectif est&nbsp;
                                <span className="specialText" onClick={() => this.discoverGoalChar(6)}>
                                    d
                                </span>
                                onc de trouver son nom d’
                                <span className="specialText" onClick={() => this.discoverGoalChar(7) }>u</span>
                                tilisateur.
                                <br/>
                                Il sait pertinemment que la page [nom d'utilisateur].html lui sera utile.

                            </p>
                        </div>
                        <div className="GoalWordContainer">
                            {
                            // TODO faire une boucle ;)
                             }
                            {goalChars[0] ? (<p>L</p>) : <> </>}
                            {goalChars[1] ? (<p>e</p>) : <> </>}
                            {goalChars[2] ? (<p>B</p>) : <> </>}
                            {goalChars[3] ? (<p>o</p>) : <> </>}
                            {goalChars[4] ? (<p>s</p>) : <> </>}
                            {goalChars[5] ? (<p>s</p>) : <> </>}
                            {goalChars[6] ? (<p>D</p>) : <> </>}
                            {goalChars[7] ? (<p>u</p>) : <> </>}
                            {goalChars[8] ? (<p>1</p>) : <> </>}
                            {goalChars[9] ? (<p>3</p>) : <> </>}
                        </div>
                    </div>
                    <div className="RightSide">
                        <p className="DescriptionText">
                            Biographie de Jean-Michel MICHEL
                        </p>
                        <p className="DescriptionText">
                            Age: 3
                            <span className="specialText" onClick={() => this.discoverGoalChar(8) }>
                                1
                            </span>
                            ans
                        </p>
                        <p className="DescriptionText">
                            Taille: 1,7
                            <span className="specialText" onClick={() => this.discoverGoalChar(9) }>3</span>
                            m
                        </p>
                        <p className="DescriptionText">
                            Poids: 50kg
                        </p>
                        <p className="DescriptionText">
                            Nationalité: Français ou Française, on ne sait pas,
                            pas  grand monde lui porte de l'importance
                        </p>
                        <p className="DescriptionText">
                            Statuts: Stagiaire à Ynov Aix depuis 10 ans
                            en tant que personne non essentiel
                        </p>
                        <p className="DescriptionText">
                            Salaire: 5 centimes de l’heure
                        </p>
                        <p className="DescriptionText">
                            Situation familiale: est marié et a 5 enfant
                        </p>
                        <p className="DescriptionText">
                            Commentaire: j’ai pas de quoi nourrir
                            mes enfants aled
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}