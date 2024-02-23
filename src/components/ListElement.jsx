import { useState} from "react";

export default function ListElement({toDoName, toDoWho, toDoDeadline, id, toDoCompleted, toggleCompleted}) {

    const style = toDoCompleted ? { textDecoration: "line-through" } : { textDecoration: "none" };


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
                <button>Löschen</button>
            </span>
        </li>
        </>
    )
};