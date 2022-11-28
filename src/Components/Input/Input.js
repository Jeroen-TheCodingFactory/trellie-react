import React from "react";
import "./Input.css";
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: "" }
    }

    onInputSubmit = (event) => {
        event.preventDefault();
        if (this.state.inputValue !== "") {
            this.props.onActivityAdded(this.state.inputValue);
            this.setState({ inputValue: "" })
        }
    }

    onInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onInputSubmit} className="input">
                <label htmlFor="input" className="input__label">Nieuwe Activiteit</label>
                <input onChange={this.onInputChange} id="input" className="input__input" type="text" placeholder="Boodschappen..." value={this.state.inputValue}></input>
            </form>
        );
    }
}

export default Input;