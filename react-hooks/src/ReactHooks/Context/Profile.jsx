import { useContext } from "react"
import { UserContext } from "./UserContext"

const Profile = () => {
  const { user } = useContext(UserContext)
  if (!user)return <h4>Not Loggerd In</h4>
  return (
    <div>
      <h1>UserName : { user.userName}</h1>
    </div>
  )
}

export default Profile
