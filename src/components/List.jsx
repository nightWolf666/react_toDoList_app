const List = () => {

    return (
        <>
            <div class="heading-was-wer-wann">
                <h2>Was?</h2>
                <h2>Wer?</h2>
                <h2>Wann?</h2>
            </div>
            <div class="list">
                <label>
                    <input type="checkbox" />
                </label>
                <ul class="ulToDoList">
                    <li>Test Einkaufen lAlalalla</li>
                    <li>PterMaria Hubrt</li>
                    <li>Morgen</li>
                </ul>
                <span class="ul-btn">
                    <button>Ändern</button>
                    <button>Löschen</button>
                </span>
            </div>
        </> 
        )
    };

export default List