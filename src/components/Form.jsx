const Form = () => {

    function handleSubmit(e) {
        e.preventDefault();
    };

    return (
        <section className="formContainer">
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="toDoWhat">To Do hinzufügen:</label>
                    <input id="toDoWhat" type="text" placeholder="Was?" />
                </div>
                <div>
                    <label htmlFor="toDoWho"></label>
                    <input id="toDoWho" type="text" placeholder="Wer?" />
                </div>
                <div>
                    <label htmlFor="toDoWhen"></label>
                    <input id="toDoWhen" type="text" placeholder="Bis wann?" />
                </div>
                <button type="submit">Hinzufügen</button>
            </form>
        </section>
    );

};

export default Form