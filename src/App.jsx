import { useState } from 'react'
import './App.css'
import Form from "./components/Form.jsx";

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
      <h1>To Do Liste</h1>
      {/* <List /> */}
      <Form />
    </>
  )
};

export default App

