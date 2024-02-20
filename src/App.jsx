import { useState } from 'react'
import './App.css'
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <List />
      <Form />
    </>
  )
};

export default App