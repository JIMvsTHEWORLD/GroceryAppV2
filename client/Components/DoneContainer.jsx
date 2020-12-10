import React from 'react';

function DoneContainer(props){
    console.log("props.doneList: ", props.doneList)
    return (
        <div className="DoneContainer">
            <h1>This is the Done Container</h1>
        </div>
    )
}

export default DoneContainer;