import React, { useEffect, useState } from "react";

function ListItem(props){
    const handleDone = () =>{
        props.handleDone(props.index)
    }
    return (
        <div className="ListItem" onClick={handleDone}>
            <p>{props.amount}{props.unit} {props.item}</p>
            {/* <button className="done-btn" onClick={handleDone}>Done</button>  */}
        </div>
    )
}

export default ListItem;