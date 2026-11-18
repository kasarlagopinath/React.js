import React, { useState} from "react";
import "./App.css";
const App = () => {
  const [name,setname] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted: ${name}');
  }

  function typing(event){
    setname(event.target.value);
  }
  return (
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" 
      placeholder="Enter your name:" 
      onchange={typing}/>

      <button type="submit">Submit</button>
    </form>

    <h1>{name}</h1>
  </div>
  );
};

export default App;
