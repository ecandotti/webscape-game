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
                    <p>Login</p>
                    <div className="inputLogin">
                        <label className="inputText">Email</label>
                        <input className="inputInput" type="text" name="email" value={email}
                               onChange={this.handleChangeEmail}/>
                    </div>
                    <div className="inputLogin">
                        <label className="inputText">Mot de passe</label>
                        <input className="inputInput" type="password" name="mdp" value={password}
                               onChange={this.handleChangeMdp}/>
                    </div>
                    <div className="inputBottom">
                        <a style={{position: "absolute", left: 0, cursor: "pointer"}} onClick={() => setViewId(3)}>
                            Mot de passe oublié ?
                        </a>
                        <input className="inputSubmit" value="Connexion" onClick={this.handleSubmit}/>
                    </div>
                </div>
            </div>
        )
    }
}