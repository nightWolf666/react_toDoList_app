import { useState } from "react";

const Form = ({setToDos}) => {

    const initialState = {
        title: "",
        who: "",
        deadline: "",
        completed: false,
    }

    const [formState, setFormState] = useState(initialState);


    function handleInput(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    function addToList(e) {
        e.preventDefault();
        if (!formState.title) {
            alert("Bitte fülle das Feld 'Was?' aus.");
        } else { 
            setToDos((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                title: formState.title,
                who: formState.who,
                deadline: formState.deadline,
                completed: formState.completed,
            }
            ]);
        setFormState(initialState);
        }
    };

    return (
        <section className="formContainer">
            <form className="form" onSubmit={addToList}>
                <div>
                    <label htmlFor="title">To Do hinzufügen:</label>
                    <input id="title" name="title" type="text" value={formState.title} onChange={handleInput} placeholder="Was?" />
                </div>
                <div>
                    <label htmlFor="who"></label>
                    <input id="who" name="who" type="text" value={formState.who} onChange={handleInput} placeholder="Wer?" />
                </div>
                <div>
                    <label htmlFor="deadline"></label>
                    <input id="deadline" name="deadline" type="date" value={formState.deadline} onChange={handleInput}/>
                </div>
                <button type="submit">Hinzufügen</button>
            </form>
        </section>
    );

};

export default Form