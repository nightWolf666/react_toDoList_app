import { useState } from "react";

export default function ListElement({toDoName, toDoWho, toDoDeadline}) {

    const initialState = {
        title: "",
        who: "",
        deadline: "",
        completed: false,
    }

    const [listElementState, setlistElementState] = useState(initialState);


    function handleClick(e) {
        setlistElementState({...listElementState, [e.target.name]: e.target.value})
        
    }[];

    return (
        <>
        <li className="li-list-element">
            <label>
                <input type="checkbox" />
            </label>
            <ul className="ul-list-element">
                <li className="ul-li-toDo">{toDoName}</li>
                <li>{toDoWho}</li>
                <li>{toDoDeadline}</li>
            </ul>
            <span className="ul-list-btn">
                <button>Ändern</button>
                <button id="delButton" name="delButton" onClick={handleClick}>Löschen</button>
            </span>
        </li>
        </>
    )
};