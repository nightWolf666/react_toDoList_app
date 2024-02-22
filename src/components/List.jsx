import ListElement from "./ListElement.jsx"

const List = ({toDos}) => {

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
                    {toDos.map((todo) => (
                    <ListElement 
                    key={todo.id} 
                    toDoName={todo.title}
                    toDoWho={todo.who}
                    toDoDeadline={todo.deadline}/>
                    ))}
                </ul>
            </div>
        </> 
        )
    };

export default List