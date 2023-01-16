import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { login } from "../store/user-action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [didAttempt, setDidAttempt] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  const handleLogin = () => {
    if (checkEmail() && checkPassword()) {
      dispatch(login(email, password));
    } else {
      toast.error("Please enter email and password");
    }
  };

  useEffect(() => {
    if (user.error) {
      toast.error(user.error);
    }
    if (user.user) {
      navigate("/purchase")
    }
  }, [user]);

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
    <Toaster position="top-center"/>
      <div>
        <h1>Login</h1>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default Login;
