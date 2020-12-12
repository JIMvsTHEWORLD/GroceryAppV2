import React, { useEffect, useState } from "react";

function ListItem(props){
    const [editStatus, setEditStatus] = useState(false);

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

    const handleCancel = (e) => {
        e.preventDefault();
        setEditStatus(false);
    }

    if (editStatus === false){
        return (
            <div className="ListItem" >
                <button className="edit-btn" onClick={handleEdit}>Edit</button>
                <div className="ListInfo" onClick={handleDone}>
                    <h4>{props.amount} {props.unit} {props.item}</h4>
                    <label>Notes:</label>
                    <p>{props.notes}</p>
                </div>
                <button className="delete-btn" onClick={handleDelete}>Delete</button>
            </div>
        )
    } else {
        return(
            <div className="ListItem" >
                <form className='editItem' onSubmit={console.log("hello")}>
                    <label>Item: </label>
                    <input
                    type='text'
                    name='item'
                    defaultValue={props.item}
                    />
                    <label>Amount: </label>
                    <input 
                    type='text'
                    name='amount'
                    defaultValue={props.amount}
                    />
                    <label>Unit (Optional): </label>
                    <input 
                    type='text'
                    name='unit'
                    defaultValue={props.unit}
                    />
                    <br></br>
                    <label>Notes (Optional): </label>
                    <input 
                    type='text'
                    name='notes'
                    defaultValue={props.notes}
                    />
                    <button type="save" className="save-btn">Save</button>
                    <button type="cancel" className="cancel-btn" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default ListItem;