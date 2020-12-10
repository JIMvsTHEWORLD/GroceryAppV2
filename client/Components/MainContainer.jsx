import React, {useEffect, useState} from 'react';
import ToDoContainer from './ToDoContainer.jsx';
import DoneContainer from './DoneContainer.jsx';
import ListItem from './ListItem.jsx';

function MainContainer(){
    const [toDoItems, setToDoItems] = useState([]);
    useEffect(() => {
        fetch("list/getItems")
        .then((data) => data.json())
        .then((res) => {
            console.log("here's the response from getItems: ", res)
            setToDoItems([...toDoItems, ...res])
        })
    }, []);

    console.log("toDoItems: ", toDoItems)
    const toDoList = [];
    const doneList = [];

    for (let i = 0; i < toDoItems.length; i++){
        if (toDoItems[i].done === true){
            doneList.push(<ListItem 
                key={i}
                done={true}
                item={toDoItems[i].item}
                amount={toDoItems[i].amount}
                unit={toDoItems[i].unit}
            />)
        } else {
            toDoList.push(<ListItem 
                key={i}
                done={false}
                item={toDoItems[i].item}
                amount={toDoItems[i].amount}
                unit={toDoItems[i].unit}
            />)
        }
    }

    return (
        <div className="MainContainer">
            <ToDoContainer toDoList={toDoList}/>
            <DoneContainer doneList={doneList}/>
        </div>
    )
}

export default MainContainer;