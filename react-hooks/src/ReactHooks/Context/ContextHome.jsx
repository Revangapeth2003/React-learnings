import Login from './Login';
import Profile from './Profile';
import UserContextProvider from './UserContextProvider';

const ContextHome = () => {
  return (
    <div>
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </div>
  );
}

export default ContextHome
