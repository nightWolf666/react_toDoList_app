export default function ListElement({toDoName, toDoWho, toDoDeadline}) {

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
                <button>Löschen</button>
            </span>
        </li>
        </>
    )
};