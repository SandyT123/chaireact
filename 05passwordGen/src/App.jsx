import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  //useRef hoook
  const passwordRef = useRef(null);

  const PasswordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (NumberAllowed) str = str + "0123456789";
    if (charAllowed) str = str + "!@#$%^&*()[]-_=+\\|{};:/?.>.";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    setPassword(pass);
  }, [length, NumberAllowed, charAllowed, setPassword]);

  const CopyClickBoard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,4)
  }, [password]);

  useEffect(() => {
    PasswordGenrator();
  }, [length, NumberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md shadow-md rounded-lg px-5 my-8 text-orange-500 bg-gray-500 mx-auto">
        <h1 className="text-center text-white">PasswordGenrator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={CopyClickBoard}
            className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={NumberAllowed}
              // id={numberInput}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              // id={characterInput}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
