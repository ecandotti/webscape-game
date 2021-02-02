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
            isModalOpen: false,
            wrongPassword: false,
            ...props.loginState
        };
    }

    handleChangeEmail = (event) => {
        this.setState({email: event.target.value});
    };

    handleChangeMdp = (event) => {
        this.setState({password: event.target.value});
    };

    handleSubmit = () => {
        const { password, email } = this.state;
        const { setViewId } = this.props;
        console.log(password, email);
        if (email === "LeBossDu13" && password === "MotDePasse12345") {
            setViewId(3)
        } else if (email === "JSUnHacker" && password === "p@ssw0rd") {
            setViewId(4)
        }
        else {
            this.setState({wrongPassword: true})
        }
    };

    openModal = () => {
          const { isModalOpen } = this.state;
          this.setState({isModalOpen: !isModalOpen})
    };

    render() {
        const { email, password, isModalOpen, wrongPassword } = this.state;
        return (
            <div className="App">
                <div className="loginBox">
                    <div className="titre">
                        <h2>Login</h2>
                    </div>
                    <div className="inputLogin">
                        <label className="inputText">Nom d'utilisateur</label>
                        <input className="inputInput" type="text" name="email" value={email} disabled
                               onChange={this.handleChangeEmail}/>
                    </div>
                    <div className="inputLogin">
                        <label className="inputText">Mot de passe</label>
                        <input className="inputInput" type="password" name="mdp" value={password}
                               onChange={this.handleChangeMdp}/>
                    </div>
                    <div className="inputBottom">
                        <a className="mdpoublie" onClick={() => this.openModal()}>
                            Mot de passe oublié ?
                        </a>
                        <button className="inputSubmit" onClick={this.handleSubmit}>Connexion</button>
                        {
                            wrongPassword ?
                                <p className="wrong" style={{color: "red"}}> mauvais mot de passe </p> :
                                <> </>
                        }

                        <Modal isOpen={isModalOpen}>
                            <ForgotPassword closeModal={this.openModal} />
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}
