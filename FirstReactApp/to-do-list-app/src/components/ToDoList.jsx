import {React, useState} from "react";
import styles from "./toDoList.module.css";

const ToDoList = () => {

    const toDoList = [
        "Learn React",
        "Build HealthUp",
        "Connect with friends",
        "Learn C# and .NET"
    ];

    const [toDos, setToDos] = useState(toDoList);
    const [newToDo, setNewToDo] = useState();
    const [searchToDoValue, setSearchToDoValue] = useState("");

    const deleteHandler = (item) => {
        setToDos(toDos.filter((toDo) => toDo !== item));
    }

    const collectToDoTitle = (event) => {
        setNewToDo(event.target.value.trim());
    }

    const handleFilteredToDos = (event)=>{
		let searchValue = event.target.value.toLowerCase();
		setSearchToDoValue(searchValue)
	}

    return (
        <div id={styles.wrapper}>
            <header>
                <div id={styles.pageBanner}>
                    <h1 className={styles.title}>To-Do List App</h1>
                </div>
                <p>My To-Do List</p>
                <form id={styles.searchToDos}>
                    <input type="text" placeholder="Search to-dos..." onKeyUp={handleFilteredToDos}/>
                </form>
            </header>
            <div id={styles.toDoList}>
                <h2 className={styles.titleTwo}>Plans For Today</h2>
                <ul>
                    {
                        toDos.map((toDo, index)=>(
                            <li key={index}>
                                <span className={styles.name}>{toDo}</span>
                                <span className={styles.delete} onClick={()=> deleteHandler(toDo)}>Delete</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>

  
    )
}
export default ToDoList;