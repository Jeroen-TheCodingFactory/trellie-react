import React from "react";
import Trellie from "../Components/Trellie/Trellie";
import trelliesObject from "../Data/trellies";
import "./App.css";

class App extends React.Component {

    constructor(){
        super();
        this.state = {trellies: []}
    }

    componentDidMount(){
        this.setState({trellies: trelliesObject});
    }

    onActivityAdded = (inputValue, id) => {
        console.log(id);
        let oldState = this.state.trellies;
        let newState = {
            label: "Vandaag",
            description: inputValue,
            id: oldState[id - 1].activities.length + 1
        }
        oldState[id - 1].activities.push(newState);
        this.setState({trellies: oldState});
    }
    
    render(){
        let render = this.state.trellies.map(object => {
            return <Trellie id={object.id} onActivityAdded={this.onActivityAdded} key={object.id} trellie={object}/>
        });    
        return (
            <> 
                {render}
            </>
        );
    }
}

export default App;