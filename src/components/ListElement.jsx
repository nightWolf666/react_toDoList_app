import { useState} from "react";

export default function ListElement({toDoName, toDoWho, toDoDeadline, id, toDoCompleted, toggleCompleted}) {

    const style = toDoCompleted ? { textDecoration: "line-through" } : { textDecoration: "none" };
    const initialState = {
        title: toDoName,
        who: toDoWho,
        deadline: toDoDeadline,
        id: id,
        toDoCompleted:toDoCompleted,
        completed: false,
    }

    const [listElementState, setlistElementState] = useState(initialState);


    function handleClick(e) {
        setlistElementState({...listElementState, [e.target.name]: e.target.value})
        console.log(listElementState.id);
        
    }[];

    return (
        <>
        <li className="li-list-element" style={style}>
            <label htmlFor={`todo_${id}`}>Erledigt</label>
            <input 
                id={`todo_${id}`}
                name={toDoName}
                value={toDoName}
                type="checkbox"
                checked={toDoCompleted}
                onChange={() => toggleCompleted(id)}
            />
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