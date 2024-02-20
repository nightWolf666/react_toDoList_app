import ListElement from "./ListElement.jsx"

const List = () => {

    const toDoItems = [
        {id: 1, toDoName: "Einkaufen", who: "Peter", when: "Freitag", completed: false},
        {id: 2, toDoName: "Staubsaugen", who: "Sarah", when: "Mittwoch", completed: false},
        {id: 3, toDoName: "Hamster füttern", who: "Sarah", when: "Mittwoch", completed: false},
        {id: 4, toDoName: "Brennholz hacken", who: "Uwe", when: "03.04.2024", completed: false},
        {id: 5, toDoName: "Urlaub machen ", who: "Peter", when: "Juni", completed: false},
        ];

    // function addToDo() {
    //     const newToDo = {
 
    //     }
    // };

    return (
        <>
            <h1>To Do Liste</h1>
            <div className="heading-was-wer-wann">
                <h2>Was?</h2>
                <h2>Wer?</h2>
                <h2>Wann?</h2>
            </div>
            <div className="list">
                <ul className="ul-list-list">
                    {toDoItems.map(({id, toDoName, who, when, completed}) => (
                    <ListElement key={id} toDoName={toDoName} who={who} when={when} completed={completed}/>
                    ))}
                </ul>
            </div>
        </> 
        )
    };

export default List