import React from "react"
import '../styles/App.css';
import '../styles/StepTwo.css'

export default class StepTwo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            state: "state",
            email: "",
            motdepasse: ""
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMdp = this.handleChangeMdp.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
        console.log(this.state.email)
    }

    handleChangeMdp(event) {
        this.setState({motdepasse: event.target.value});
        console.log(this.state.motdepasse)
    }

    handleSubmit(event) {
        alert('Login');
      }

    render() {
        const { setViewId } = this.props;
        return (
            <div className="App">
                <div className="loginBox">
                    <p>Login</p>
                    <div className="inputLogin">
                        <label className="inputText">Email</label>
                        <input className="inputInput" type="text" name="email" value={this.state.email} onChange={this.handleChangeEmail} />
                    </div>
                    <div className="inputLogin">
                        <label className="inputText">Mot de passe</label>
                        <input className="inputInput" type="password" name="mdp" value={this.state.motdepasse} onChange={this.handleChangeMdp} />
                    </div>
                    <div className="inputBottom">
                        <a style={{ position: "absolute", left: 0, cursor: "pointer" }}  onClick={() => setViewId(3)}>Mot de passe oublié ?</a>
                        <input className="inputSubmit" type="submit" value="Connexion" />
                    </div>
                </div>
            </div>
        )
    }
}