import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar.jsx";
import MainContainer from "./Components/MainContainer.jsx"

class App extends React.Component {
    constructor() {
      super();
    }

    render(){
        return (
            <div>
                <Navbar />
                <MainContainer />
            </div>
        )
    }
}


export default App;