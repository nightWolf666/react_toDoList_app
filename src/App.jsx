import { useState } from 'react'
import './App.css'
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";

function App() {
  // const [count, setCount] = useState(0)

  const ToDo = [
    {toDoName: "Einkaufen", who: "Peter", when: "Freitag", status: "erledigt"},
    {toDoName: "Staubsaugen", who: "Sarah", when: "Mittwoch", status: "nicht erledigt"},
    {toDoName: "Hamster füttern", who: "Sarah", when: "Mittwoch", status: "nicht erledigt"},
    {toDoName: "Brennholz hacken", who: "Uwe", when: "03.04.2024", status: "nicht erledigt"},
    {toDoName: "Urlaub machen ", who: "Peter", when: "Juni", status: "nicht erledigt"},
    ];



  return (
    <>
      <List />
      <Form />
    </>
  )
};

export default App


// <div className="dcHeroes">
// {justiceLeague.map((hero) => (
//   <HeroProfile key={hero.id} heroName={hero.name} />
// ))}
// </div>


// <div className="cardsContainer">
// {cats.map((animal) => (
//   <Cards animalName={animal.animalName} image={animal.image} />
// ))}
// </div>