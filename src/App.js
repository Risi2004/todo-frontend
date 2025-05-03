import { use, useEffect, useState } from "react";
import axios from "axios"
import "./App.css";

function App() {

  const [enteredvalue, setevalue] = useState("")
  const [fruit, setfruit] = useState(["Mango, PineApple"])

  useEffect(function () {
    axios.get("http://localhost:5000/fruitlist").then(function (data) {
      setfruit(data.data)
    })
  },[])


  function handleValue(evt) {
    setevalue(evt.target.value)
  }

  function add() {

    axios.post("http://localhost:5000/addfruit",{newfruit:enteredvalue})

    setfruit([...fruit, {name:enteredvalue}])
    setevalue("")
  }

  return (<div>
    <h1>Todo List</h1>
    <input onChange={handleValue} type="text" />
    <button onClick={add}>Add</button>
    {fruit.map(function (item, index) {
      return <h1 key={index}>{item.name}</h1>
    })}
  </div>);
}

export default App;


