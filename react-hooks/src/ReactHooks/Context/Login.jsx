import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({userName,password})
  }
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />{" "}
      <input
        type="text"
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Login;
