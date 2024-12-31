import { useParams } from "react-router-dom";

const User = () => {
  const { username } = useParams();

  return (
    <div>
      <h1>This is User component</h1>
      <h3>User : {username}</h3>
    </div>
  );
};

export default User;
//useParam() it is an hook
//used to display the username here
//username is displayed in the UI
//first of all the username variable name is declared in App and Navbar component
//This is known as dynamic route
