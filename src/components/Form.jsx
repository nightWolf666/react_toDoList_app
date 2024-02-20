const Form = () => {

    function handleSubmit(e) {
        e.preventDefault();
        alert("Neues To Do hinzugefügt!");
    };

    return (
        <section className="formContainer">
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>To Do hinzufügen:</label>
                    <input type="text" placeholder="Was?" />
                </div>
                <div>
                    <input type="text" placeholder="Wer?" />
                </div>
                <div>
                    <input type="text" placeholder="Bis wann?" />
                </div>
                <button type="submit">Hinzufügen</button>
            </form>
        </section>
    );

};

export default Form