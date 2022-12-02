import React from "react";
import Trellie from "../Components/Trellie/Trellie";
import trelliesObject from "../Data/trellies";
import {connect} from "react-redux";
import "./App.css";

class App extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.setTrelliesFromRedux(trelliesObject);
    }

    
    render(){
        let render = this.props.trelliesFromRedux.map(object => {
            return <Trellie id={object.id}  key={object.id} trellie={object}/>
        });    
        return (
            <> 
                {render}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    	return {
            trelliesFromRedux : state.trellies,
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTrelliesFromRedux: (payload) => dispatch({type: "TRELLIES", payload: payload})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);