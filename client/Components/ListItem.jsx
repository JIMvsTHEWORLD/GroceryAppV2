import React, { useEffect, useState } from "react";

function ListItem(props){
    const [editStatus, setEditStatus] = useState(false);
    const [id, setId] = useState(props.id)
    const [item, setItem] = useState(props.item);
    const [amount, setAmount] = useState(props.amount);
    const [unit, setUnit] = useState(props.unit);
    const [notes, setNotes] = useState(props.notes);

    const handleDone = () =>{
        props.handleDone(props.index)
    }

    const handleEdit = (e) => {
        e.preventDefault();
        setEditStatus(true);
    }

    const handleDelete = (e) => {
        props.handleDelete(e, props.id)
    }

    const handleSave = (e) => {
        console.log("props in handleSave in Main: ", props)
        e.preventDefault();
        let url = `http://localhost:3000/list/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({item, amount, unit, notes}),
        })
        .then((data) => {
            console.log("data with put request: ", data)
        })
        .catch((err) => {
            console.log ("error with the  PUT fetch: ", err)
        })
        setEditStatus(false)
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setEditStatus(false);
    }

    if (editStatus === false){
        return (
            <div className="ListItem" >
                <button className="edit-btn" onClick={handleEdit}>Edit</button>
                <div className="ListInfo" onClick={handleDone}>
                    <h4>{amount} {unit} {item}</h4>
                    <label>Notes:</label>
                    <p>{notes}</p>
                </div>
                <button className="delete-btn" onClick={handleDelete}>Delete</button>
            </div>
        )
    } else {
        return(
            <div className="ListItem" >
                <form className='editItem' onSubmit={handleSave}>
                    <label>Item: </label>
                    <input
                    type='text'
                    name='item'
                    defaultValue={props.item}
                    onChange={(e) => setItem(e.target.value)}
                    />
                    <label>Amount: </label>
                    <input 
                    type='text'
                    name='amount'
                    defaultValue={props.amount}
                    onChange={(e) => setAmount(e.target.value)}
                    />
                    <label>Unit (Optional): </label>
                    <input 
                    type='text'
                    name='unit'
                    defaultValue={props.unit}
                    onChange={(e) => setUnit(e.target.value)}
                    />
                    <br></br>
                    <label>Notes (Optional): </label>
                    <input 
                    type='text'
                    name='notes'
                    defaultValue={props.notes}
                    onChange={(e) => setNotes(e.target.value)}
                    />
                    <button type="save" className="save-btn">Save</button>
                    <button type="cancel" className="cancel-btn" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default ListItem;