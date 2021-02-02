import React from "react"
import '../styles/App.css';
import '../styles/StepTwo.css'

export default class StepTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleChangeEmail = (event) => {
        this.setState({email: event.target.value});
    };

    handleChangeMdp = (event) => {
        this.setState({password: event.target.value});
    };

    handleSubmit = () => {
        console.log('Login');
    };

    render() {
        const { setViewId } = this.props;
        const { email, password } = this.state;
        return (
            <div className="App">
                <div className="loginBox">
                    <div className="title">
                        <h2>Login</h2>
                    </div>
                    <div className="inputLogin">
                        <label className="inputText">Nom d'utilisateur</label>
                        <input className="inputInput" type="text" name="email" value="LeBossDu13" disabled
                               onChange={this.handleChangeEmail}/>
                    </div>
                    <div className="inputLogin">
                        <label className="inputText">Mot de passe</label>
                        <input className="inputInput" type="password" name="mdp" value={password}
                               onChange={this.handleChangeMdp}/>
                    </div>
                    <div className="inputBottom">
                        <a className="mdpoublie" onClick={() => setViewId(3)}>
                            Mot de passe oublié ?
                        </a>
                        <bouton className="inputSubmit" onClick={this.handleSubmit}>Connexion</bouton>
                    </div>
                </div>
            </div>
        )
    }
}