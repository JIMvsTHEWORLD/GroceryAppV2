import React from "react";
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
                <h1>HELLO WORLD</h1>
                <Navbar />
                <MainContainer />
            </div>
        )
    }
}


export default App;