import React from "react"
import './styles/App.css';
import Landing from "./Views/Landing";
import StepOne from "./Views/StepOne";
import StepTwo from "./Views/StepTwo";
import StepThree from "./Views/StepThree";
import StepFour from "./Views/StepFour";
import StepFive from "./Views/StepFive";
import StepSix from "./Views/StepSix";
import StepSeven from "./Views/StepSeven";
import StepEight from "./Views/StepEight";

// View Id => 0 = landing,

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      viewId: 0,
      loginState: {
        email: "LeBossDu13",
        password: "",
        redirected: false
      }
    };
    // this.state = {
    //   viewId: 7
    // } // biography
  }

  setViewId = (viewId) => {
    this.setState({ viewId })
  };

  redirectToLogin = () => {
      this.setState({
        viewId: 2,
        loginState: {
          email: "JSUnHacker",
          password: "p@ssw0rd",
          redirected: true
        }
      })
  };


  render() {
    const { viewId, loginState } = this.state;
    switch (viewId) {
      case 0:
        return (
            <Landing setViewId={this.setViewId} />
        );
      case 1:
        return (
            <StepOne setViewId={this.setViewId} />
        );
      case 2:
        return (
            <StepTwo loginState={loginState} setViewId={this.setViewId} />
        );
      case 3:
        return (
            <StepThree redirectToLogin={this.redirectToLogin} setViewId={this.setViewId} />
        );
      case 4:
        return (
            <StepFour setViewId={this.setViewId} />
        );
      case 5:
        return (
            <StepFive setViewId={this.setViewId} />
        );
      case 6:
        return (
            <StepSix setViewId={this.setViewId} />
        );
      case 7:
        return (
            <StepSeven setViewId={this.setViewId} />
        );
      case 8:
        return (
            <StepEight setViewId={this.setViewId} />
        );

      default:
        return (
            <div>
              broken nav
            </div>
        )
    }
  }
}