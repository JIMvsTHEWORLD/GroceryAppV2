import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import MainContainer from "./Pages/MainContainer.jsx"
import Login from "./Pages/Login.jsx"
import { Route, Switch, withRouter, Link } from "react-router-dom";

class App extends React.Component {
    constructor() {
      super();
    }

    render(){
        return (
            <div>
                <MainContainer />
            </div>
        )
    }
}


export default App;