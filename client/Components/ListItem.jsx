import React, { useEffect, useState } from "react";

function ListItem(props){
    const [done, setDone] = useState(false);
    console.log("props: ", props)
    return (
        <div className="ListItem">
            <p>{props.amount}{props.unit} {props.item}</p>
            <button className="done-btn" onClick={console.log("hello")}>Done</button> 
        </div>
    )
}

export default ListItem;