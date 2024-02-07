import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  let [length, setlength] = useState(8);
  let [numallowed, setnumallowed] = useState(false);
  let [charallowed, setcharallowed] = useState(false);
  let [password, setpassword] = useState("");

  const passwordGentrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numallowed) str += "1234567890";
    if (charallowed) str += "@!#$%^&*()_+=?.,><:;";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numallowed, charallowed]);

  useEffect(() => {
    passwordGentrator();
  }, [length, numallowed, charallowed ]);

  let copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, )
        window.navigator.clipboard.writeText(password)
  } ,[password])

  let passwordRef = useRef(null)




  return (
    <div className="main-div">
      <h1 className="text-center text-4xl pt-20">password genrator</h1>
      <div className="all-content-div">
        <div className="input-div">
          <input type="text" value={password} placeholder="password" readOnly ref={passwordRef} />
          <button className="bg-red text-white bg-blue-400" onClick={copyPassword}>Copy</button>
        </div>
        <div className="checkbox-range">
          <div>
            <input
              type="range"
              min={8}
              max={25}
              value={length}
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label> length {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={numallowed}
              onChange={() => {
                setnumallowed((prev) => !prev);
              }}
            />
            <label> numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={charallowed}
              onChange={() => {
                setcharallowed((prev) => !prev);
              }}
            />
            <label> characters</label>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
