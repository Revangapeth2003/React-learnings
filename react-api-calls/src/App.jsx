import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  async function apiCalls() {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      console.log(response.data);
    } catch (error) {
      console.log("The Error fetching data:", error);
    }
  }
  useEffect(() => {
    apiCalls;
  }, []);
  return (
    <>
      <h1>App Component</h1>
      <button onClick={apiCalls}>API CALL</button>
    </>
  );
}

export default App;
