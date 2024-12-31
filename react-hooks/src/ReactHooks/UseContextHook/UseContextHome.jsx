import { createContext, useState } from "react";
import Users from "./Users";

//syntax for createContext()
//export const variableName = createContext()
export const ThemeContext = createContext();

const UseContextHome = () => {
  const [theme, setTheme] = useState("light"); //useState assumption
  const lightDark = {
    backgroundColor: theme === "light" ? "green" : "yellow",
    color: theme === "light" ? "yellow" : "green",
  };

  const toogleClick = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme: theme }}>
      <button onClick={toogleClick}>Toogle</button>
      <h1 style={lightDark}>Use Context Hook</h1>
      <Users />
    </ThemeContext.Provider> // eppothume fragment tag kulla antha createContext variable name
    // .Provider nu kudukanum aprm value kulla entha state variable props ah anupanumo atha 
    // value kulla kudukanum
    //.Provider kudutha tha variable ah anupa mudium
  );
};

export default UseContextHome;
