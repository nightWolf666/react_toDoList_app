import { useState } from 'react'
import './App.css'
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";

function App() {
  // const [count, setCount] = useState(0)

  const [toDos, setToDos] = useState([])

  return (
    <>
      <List toDos={toDos} setToDos={setToDos}/>
      <Form setToDos={setToDos}/>
    </>
  )
};

export default App