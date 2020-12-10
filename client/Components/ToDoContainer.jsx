import React, { useEffect, useState } from "react";
import ListItem from "./ListItem.jsx"
import "../styles/styles.scss"

function ToDoContainer(props){
    // const [toDoItems, setToDoItems] = useState([]);
    // useEffect(() => {
    //     fetch("list/getItems")
    //     .then((data) => data.json())
    //     // .then((res) => {
    //     //     console.log("here's the response from getItems: ", res)
    //     //     setToDoItems([...toDoItems, ...res])
    //     // })
    // }, []);
    // console.log("toDoItems: ", toDoItems)
    // const toDoList = [];
    // const doneList = [];
    // if (toDoItems.length){
    //     for (let i = 0; i < toDoItems.length; i++){
    //         toDoList.push(<ListItem 
            // key={i}
            // done={false}
            // // item={toDoItems[i]}
            // item={toDoItems[i].item}
            // amount={toDoItems[i].amount}
            // unit={toDoItems[i].unit}
    //         />)
    //     }
    // }
    console.log("props.toDoList: ", props.toDoList)
    return (
        <div className="ToDoContainer">
            <h1>This is the To Do Container</h1>
            {/* {toDoList} */}
        </div>
    )
}

export default ToDoContainer;