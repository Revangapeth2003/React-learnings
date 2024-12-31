import { useContext } from "react"
import { ThemeContext } from "./UseContextHome"

const User = () => {
  const { theme } = useContext(ThemeContext);

  const textStyle = {
    backgroundColor: theme === "light" ? "red" : "grey",
    color : theme === "light" ? "grey" : "red"
  }
  return (
    <div>
      <h1 style={textStyle}>User Component</h1>
    </div>
  )
}

export default User
