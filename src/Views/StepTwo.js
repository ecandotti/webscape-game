import React from "react";
import Modal from 'react-modal';
import ForgotPassword from "../components/ForgotPassword";
import '../styles/App.css';
import '../styles/StepTwo.css'

Modal.setAppElement('#root');

export default class StepTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isModalOpen: false
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
        const { email, password, isModalOpen } = this.state;
        return (
            <div className="App">
                <div className="loginBox">
                    <div className="titre">
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
                        <a className="mdpoublie" onClick={() => this.setState({isModalOpen: !isModalOpen})}>
                            Mot de passe oublié ?
                        </a>
                        
                        <bouton className="inputSubmit" onClick={this.handleSubmit}>Connexion</bouton>
                        <Modal isOpen={isModalOpen}>
                            <ForgotPassword />
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}
