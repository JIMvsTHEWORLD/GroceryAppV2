import React, { useState } from 'react';
import "../styles/styles.scss";

function Navbar(){
    const [item, setItem] = useState('');
    const [amount, setAmount] = useState('');
    const [unit, setUnit] = useState('');
    const [notes, setNotes] = useState('');

    const onSubmit = (e) => {
        //e.preventDefault();
        let url = 'http://localhost:3000/list/addItem';
        fetch(url, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({item, amount, unit, notes}),
        })
        .then((data) => {
            console.log("data in Navbar.jsx: ", data)
        })
        .catch((err) => {
            console.log ("error with the fetch: ", err)
        })
    }

    return(
        <div className="Navbar">
            <h1>This is the Navbar</h1>
            <form className='newItem' onSubmit={onSubmit}>
                <label>Item: </label>
                <input
                type='text'
                name='item'
                placeholder='e.g. "potatoes"'
                onChange={(e) => setItem(e.target.value)}
                />
                <label>Amount: </label>
                <input 
                type='text'
                name='amount'
                placeholder='1, 2, 100'
                onChange={(e) => setAmount(e.target.value)}
                />
                <label>Unit (Optional): </label>
                <input 
                type='text'
                name='unit'
                placeholder='lbs, boxes, etc'
                onChange={(e) => setUnit(e.target.value)}
                />
                <br></br>
                <label>Notes (Optional): </label>
                <input 
                type='text'
                name='notes'
                placeholder='Add notes'
                onChange={(e) => setNotes(e.target.value)}
                />
                <button type="submit" className="btn sumbitNewItem">Add Item</button>
            </form>
        </div>
    )
}

export default Navbar;