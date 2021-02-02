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
                        <p>
                            Bravo vous avez fini l'escape game!<br/>
                            Suite a ça Jean-Michel a perdu son stage a Ynov car il a acceder au compte administrateur.<br/>
                            Mais heureusement pour lui il a pu trouver un emploi en tant que hacker éthique<br/><br/>

                            Cet Escape Game vous a été proposé par l'équipe v composé de : JEAN Louis, JACQUENOD Steven, CANDOTTI Enzo, KIM Injin, MAYER Quentin et GUERARD Robin<br/><br/>
                            Nous espérons que ça vous a plus!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}