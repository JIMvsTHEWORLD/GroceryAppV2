import React, {useEffect, useState} from 'react';
import ListItem from './ListItem.jsx';

function MainContainer(){
    const [toDoItems, setToDoItems] = useState([]);
    useEffect(() => {
        fetch("list/getItems")
        .then((data) => data.json())
        .then((res) => {
            res.forEach(el => el.done = false)
            setToDoItems([...toDoItems, ...res])
        })
    }, []);

    const handleDone = (i) => {
        console.log(`hello ${toDoItems[i].item}`)
        toDoItems[i].done = !toDoItems[i].done;
        console.log(toDoItems[i].done)
        setToDoItems([...toDoItems])
    }

    const handleDelete = (e, id) => {
        e.preventDefault();
        let newList = toDoItems.filter(item => item.id !== id);
        setToDoItems(newList)
        fetch(`http://localhost:3000/list/${id}`, {
            method: "Delete"
        })
    }

    const handleClear = (e) => {
        let x = confirm("Are you sure you want to delete the entire list?")
        if(x === true){
            e.preventDefault();
            let newList = [];
            setToDoItems(newList);
            fetch("http://localhost:3000/list/all", {
                method: "Delete"
            });
        };
    }

    const toDoList = [];
    const doneList = [];

    for (let i = 0; i < toDoItems.length; i++){
        if (toDoItems[i].done === true){
            doneList.push(<ListItem 
                key={i}
                id={toDoItems[i].id}
                index={i}
                done={toDoItems[i].done}
                item={toDoItems[i].item}
                amount={toDoItems[i].amount}
                unit={toDoItems[i].unit}
                notes={toDoItems[i].notes}
                handleDone={handleDone}
                handleDelete={handleDelete}
            />)
        } else {
            toDoList.push(<ListItem 
                key={i}
                id={toDoItems[i].id}
                index={i}
                done={toDoItems[i].done}
                item={toDoItems[i].item}
                amount={toDoItems[i].amount}
                unit={toDoItems[i].unit}
                notes={toDoItems[i].notes}
                handleDone={handleDone}
                handleDelete={handleDelete}
            />)
        }
    }

    return (
        <div className="MainContainer">
            <div className="ToDoList">
                <h1>This is the To Do List</h1>
                {toDoList}
            </div>
            <div className="DoneList">
                <h1>This is the Done List</h1>
                {doneList}
            </div>
            <button className="clear-btn" onClick={handleClear}>Clear List</button>
        </div>
    )
}

export default MainContainer;