import { useEffect, useState } from "react";

export const UseEffectHook = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count);
    console.log("The useeffect");
  }, [count]); //eppolam dependency array kulla iruka count variable update agutho appolam useEffect call agum
  return (
    <div>
      <h1>useEffect Hook</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount((curr) => curr + 1)}>ADD</button>
    </div>
  );
};
