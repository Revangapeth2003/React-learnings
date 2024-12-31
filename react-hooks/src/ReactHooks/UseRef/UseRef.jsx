import  { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");

  const reff = useRef(); //useref is use to active the input

  const handle = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    reff.current.focus(); //when we use the useRef()  we can be use the useEffect for handle
    //current.focus(), the important word used to handle the useRef,focus() is an key word
  });
  return (
    <div>
      <h1>UseRef Component</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={handle}
        ref={reff}
      />
      <div>
        <h3>{inputValue}</h3>
      </div>
    </div>
  );
};

export default UseRef;
