import React, { Component } from 'react';

class ProgressBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step1: "",
            step2: "",
            step3: ""
        }
    }

    componentDidMount = () => {
        var { step } = this.props
        if (step === "step1") {
            this.setState({
                step1: "active",
                step2: "",
                step3: ""
            })
        }
        if (step === "step2") {
            this.setState({
                step1: "complete",
                step2: "active",
                step3: ""
            })
        }
        if (step === "step3") {
            this.setState({
                step1: "complete",
                step2: "complete",
                step3: "active"
            })
        }
    }

    render() {
        return (
            <ul className="progressbar">
                <li className={this.state.step1}>Create Project</li>
                <li className={this.state.step2}>Create Position</li>
                <li className={this.state.step3}>Suggest Candiates</li>
            </ul>
        );
    }
}

export default ProgressBar;