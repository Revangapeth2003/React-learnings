import { useSelector } from "react-redux";

const Users = () => {
  const users = useSelector((state) => state.userInfo.Users);

  console.log(users); // Log users after selecting from state

  return (
    <div>
      <h1>This is Users Component</h1>
      {users?.map((user, index) => {
        return (
          <div key={index}>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <h2>{user.email}</h2>
            <h2>{user.contact}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
