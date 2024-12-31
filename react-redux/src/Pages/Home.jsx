import { useState } from "react";
import { useDispatch } from "react-redux"; 
import { setUsers } from "../slices/UserSlice";
const Home = () => {
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  const handleForm = (event) => {
    const { name, value } = event.target;
    setFormInput((currInput) => ({
      ...currInput,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add logic here to handle form submission
    dispatch(setUsers(formInput));
    console.log(formInput);
  };

  return (
    <div>
      <h1>Home</h1>
      <h3>This is home component</h3>
      <br />
      <label>Name</label>
      <br />
      <input
        name="name"
        type="text"
        value={formInput.name}
        onChange={handleForm}
      />
      <br />
      <label>Age</label>
      <br />
      <input
        name="age"
        type="number"
        value={formInput.age}
        onChange={handleForm}
      />
      <br />
      <label>Email</label>
      <br />
      <input
        name="email"
        type="text"
        value={formInput.email}
        onChange={handleForm}
      />
      <br />
      <label>Contact</label>
      <br />
      <input
        name="contact"
        type="number"
        value={formInput.contact}
        onChange={handleForm}
      />
      <br />
      <button onClick={handleSubmit}>ADD</button>
    </div>
  );
};

export default Home;
