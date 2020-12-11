import React, {useEffect, useState} from 'react';
import ListItem from './ListItem.jsx';

function MainContainer(){
    const [toDoItems, setToDoItems] = useState([]);
    useEffect(() => {
        fetch("list/getItems")
        .then((data) => data.json())
        .then((res) => {
            res.forEach(el => el.done = false)
            console.log('res again: ', res)
            setToDoItems([...toDoItems, ...res])
        })
    }, []);

    

    const handleDone = (i) => {
        console.log(`hello ${toDoItems[i].item}`)
        toDoItems[i].done = !toDoItems[i].done;
        console.log(toDoItems[i].done)
        return setToDoItems([...toDoItems])
    }

    console.log("toDoItems: ", toDoItems)
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
                handleDone={handleDone}
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
                handleDone={handleDone}
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
        </div>
    )
}

export default MainContainer;