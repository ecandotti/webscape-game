import React from "react"
import '../styles/App.css';
import '../styles/StepSix.css';

export default class ForgotPassword extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            state: "state",
            animal: "",
            location: "",
            sport: "",
            showPassword: false,
            showError: false
        }
    }

    handleChangeAnimal = (event) => {
        this.setState({animal: event.target.value});
    };

    handleChangeLocation = (event) => {
        this.setState({location: event.target.value});
    };

    handleChangeSport = (event) => {
        this.setState({sport: event.target.value});
    };

    handleSubmit = () => {
        if (this.state.animal == "Rex" && this.state.location == "Roubaix" && this.state.sport == "Bowling") {
            this.setState({ showPassword: true, showError: false })
        } else {
            this.setState({ showError: true })
        }
    };

    render() {
        const { closeModal } = this.props;
        const { showPassword, showError } = this.state;
        return (
            <div className="App">
                <div className="close" onClick={closeModal}><span>✖</span></div>
                <div className="container">
                    <div className="inputAnswer">
                        <label className="inputText">Quel était le nom de votre animal de compagnie</label>
                        <input className="inputInput" type="text" name="animal"
                               onChange={this.handleChangeAnimal}/>
                    </div>
                    <div className="inputAnswer">
                        <label className="inputText">Quel est votre lieu de naissance ?</label>
                        <input className="inputInput" type="text" name="location"
                               onChange={this.handleChangeLocation}/>
                    </div>
                    <div className="inputAnswer">
                        <label className="inputText">Quel sport pratiquiez vous enfant ?</label>
                        <input className="inputInput" type="text" name="sport"
                               onChange={this.handleChangeSport}/>
                    </div>
                    <button className="start" style={{ marginTop: "2rem" }} onClick={this.handleSubmit}>Valider</button>
                    {showPassword && (
                        <p>Votre mot de passe est : MotDePasse12345</p>
                    )}
                    {showError && (
                        <p>Faux ! Vérifiez bien les majuscules et les accents</p>
                    )}
                </div>
            </div>
        )
    }
}