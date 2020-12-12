import React, { useEffect, useState } from "react";

function ListItem(props){
    const handleDone = () =>{
        props.handleDone(props.index)
    }

    const handleEdit = (e) => {
        e.preventDefault();
        console.log(`Edit ${props.item}`)
    }

    const handleDelete = (e) => {
        props.handleDelete(e, props.id)
    }

    return (
        <div className="ListItem" >
            <button className="edit-btn" onClick={handleEdit}>Edit</button>
            <div className="ListInfo" onClick={handleDone}>
                <p>{props.amount} {props.unit} {props.item}</p>
                <label>Notes:</label>
                <p>{props.notes}</p>
            </div>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default ListItem;