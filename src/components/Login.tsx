import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { login } from "../store/user-action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [didAttempt, setDidAttempt] = useState(false);
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  const handleLogin = () => {
    if (checkEmail() && checkPassword()) {
      dispatch(login(email, password));
      setDidAttempt(true);
    } else {
      setError("Please enter email and password");
    }
  };

  const checkPassword = (): boolean => {
    if (password.length > 0) {
      return true;
    }
    return false;
  };

  const checkEmail = (): boolean => {
    if (email.length > 0) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <p>{error}</p>
        <p>{didAttempt && user ? "Login successful" : "Login failed"}</p>
      </div>
    </>
  );
};

export default Login;
