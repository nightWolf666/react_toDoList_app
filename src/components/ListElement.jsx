import { useState} from "react";

export default function ListElement({toDoName, toDoWho, toDoDeadline, id, toDoCompleted, toggleCompleted,toBeDeleted,toBeDeletedFunction}) {

    const style = toDoCompleted ? { textDecoration: "line-through" } : { textDecoration: "none" };

    //const toBeDeletedtoDo = ? 
    // const initialState = {
    //     title: toDoName,
    //     who: toDoWho,
    //     deadline: toDoDeadline,
    //     id: id,
    //     toDoCompleted:toDoCompleted,
    //     completed: toggleCompleted,
    //     toBeDeleted:toBeDeleted,
    // }

    // const [listElementState, setlistElementState] = useState(initialState);


    // function toBeDeletedtoDo(e) {
    //     console.log(listElementState.toBeDeleted);
    //     setlistElementState({...listElementState, [e.target.toBeDeleted]: true})
    //     //toBeDeleted.setlistElementState(true);

    //     console.log(listElementState);
        
    // };

    // const CartFood = ({
    //     foodName,
    //     foodPrice,
    //     numberOfPortions,
    //     cartFood,
    //     setCartFood,
    //     id,
    //   }) => {
    //     const handleRemoveFood = () => {
    //           setCartFood((cartFood) => cartFood.filter((el) => el.foodId !== foodId));

    //     };

    const CartFood = ({
        foodName,
        foodPrice,
        numberOfPortions,
        cartFood,
        setCartFood,
        id,
      }) => {
        const handleRemoveFood = () => {
          setCartFood(cartFood.filter((el) => el.id !== id));
        };

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
                <button id="delButton" name="delButton" onClick={() => toBeDeletedtoDo(id)}>Löschen</button>
            </span>
        </li>
        </>
    )
};