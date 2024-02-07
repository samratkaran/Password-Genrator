import { useState } from "react";
import "./App.css";

function App() {

  let [length , setlength] = useState(8)
  let [numallowed , setnumallowed] = useState(false)
  let [char , setchar] = useState(false)
  let [password , setpassword] = useState("")

  const passwordGentrator = () => {}


  
  
  
  return (
    <div className="main-div">
      <h1 className="text-center text-4xl pt-20">password genrator</h1>
      <div className="input-div" >
        <input type="text" />
        <button className="bg-red text-white bg-blue-400" >Copy</button>
      </div>
      <div>
        
      </div>



    </div>
  );
}

export default App;
