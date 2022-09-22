//import './App.css';

import { useState } from "react";

function App() {
  const [number,setNumber]=useState(0)
  Countnumber = () => {
    setNumber(number+2)
  }
  return (
    <div className="App">
        <p>
          <button onClick={Countnumber}>count number</button> <br></br>
          the number is equal : {number}
          Edit js and save to reload.
        </p>
    </div>
  );
}

export default App;
