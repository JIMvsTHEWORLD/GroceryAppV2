import React from 'react';
import "../styles/styles.scss";

function Navbar(){

    const onSubmit = () => {
        console.log("Hello World");
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
                <button type="submit" className="btn sumbitNewItem">Add Item</button>
            </form>
        </div>
    )
}

export default Navbar;